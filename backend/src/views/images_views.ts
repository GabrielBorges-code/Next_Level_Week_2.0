import Image from '../models/Image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            /* O ip da máqui pode mudar, então sempre verificar quando iniciar o app mobile e o back qual é o ip da máquina e alterar */
            url: `http://192.168.0.12:3333/uploads/${image.path}`,
           
        };
    },
    renderMany(images: Image[]) {
        return images.map(image => this.render(image))
    }
};