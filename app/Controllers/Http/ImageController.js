'use strict'

const Image = use('App/Models/Image')
const Carross = use('App/Models/Carross')
const Helpers = use('Helpers') 

/**
 * Resourceful controller for interacting with images
 */
class ImageController {
  /**
   * Create/save a new image.
   * POST images
   */
  async store ({ params, request }) {
    const carross = await Carross.findOrFail(params.id)
  
    const images = request.file('image', {
      types: ['image'],
      size: '2mb'
    })

    await images.moveAll(Helpers.tmpPath('uploads'), file => ({
        name: `${Date.now()}--${file.clientName}`
    }))

    if (!images.movedAll()) {
        return images.errors()
    }

    await Promise.all(
        images
          .movedList()
          .map(image => carross.images().create({ path: image.fileName }))
      )
      
  }

  async show ({ params, request, response, view }) {
    const image = await Image.findOrFail(params.id);
    return image 
  }
  
}

module.exports = ImageController