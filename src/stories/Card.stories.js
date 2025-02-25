import CardCar from '../components/CardCar'

export default {
  title: 'Example/CardCar',
  component: CardCar,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  }
}

export const Car = {
  args: {
    car: {
      MakeText: 'Audi',
      ModelTypeText: 'A4',
      FuelTypeText: 'Diesel',
      Hp: 150,
      Km: 100000,
      Price: 15000,
      Images: {
        M: ['https://vehicle.imgix.net/3298905/d0c96cd5-b5ac-436b-9a2f-f5629fcb00b8_300.jpg']
      }
    }
  }
}
