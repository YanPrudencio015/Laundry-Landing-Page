import { icons } from "./icons"
import { ServicesImages } from "./imgs"
export const ServiceCardInfos = [
    {
        frontTitle:'Lavar e Secar',
        icon: icons[0],
        // img:[LavareSecarDesk, LavareSecartablet, LavareSecarMobile],
        img:[ServicesImages.desktop[2], ServicesImages.tablet[2], ServicesImages.mobile[2]],
        backTitle:'Lavar e Secar',
        backDesc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et error rerum velit ullam, omnis illum tempore neque.'
    },
    {
        frontTitle:'Passar',
        // icon: IconIronBoard,
        icon: icons[1],
        // img: [PassarDesk, PassarTablet,PassarMobile],
        img:[ServicesImages.desktop[3], ServicesImages.tablet[3], ServicesImages.mobile[3]],
        backTitle:'Passar',
        backDesc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et error rerum velit ullam, omnis illum tempore neque.'
    },
    {
        frontTitle:'Lavagem a Seco',
        // icon: IconWashing,
        icon: icons[5],
        // img: [LavagemASecoDesk, LavagemASecotablet, LavagemASecoMobile],
        img:[ServicesImages.desktop[1], ServicesImages.tablet[1], ServicesImages.mobile[1]],
        backTitle:'Lavagem a Seco',
        backDesc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et error rerum velit ullam, omnis illum tempore neque.'
    },
    {
        frontTitle:'Lavagem de Tapete',
        // icon: IconCarpet,
        icon: icons[2],
        // img: [TapeteDesk, TapeteTablet, TapeteMobile],
        img:[ServicesImages.desktop[0], ServicesImages.tablet[0], ServicesImages.mobile[0]],
        backTitle:'Lavagem de Tapete',
        backDesc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et error rerum velit ullam, omnis illum tempore neque.'
    },
    {
        frontTitle:'Tingimento',
        // icon: IconColorpalette,
        icon: icons[3],
        img:[ServicesImages.desktop[5], ServicesImages.tablet[5], ServicesImages.mobile[5]],
        // img: [TingimentoDesk, TingimentoTablet, TingimentoMobile],
        backTitle:'Tingimento',
        backDesc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et error rerum velit ullam, omnis illum tempore neque.'
    },
]
