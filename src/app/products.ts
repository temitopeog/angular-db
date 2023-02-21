export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 13 Pro',
    price: 599,
    description: "Smooth, responsive Super Retina XDR display with ProMotion. Huge camera system upgrade for dramatic new possibilities. Exceptional durability. The ultrafast A15 Bionic chip. And breakthrough battery life. Let’s Pro.",
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-pro-max-graphite-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1671646771161'
  },
  {
    id: 2,
    name: 'iPhone 13 Pro Max',
    price: 699,
    description: "Powerful processor, stunning cameras, and a gorgeous screen. Apple iPhone 13 Pro Max got it all, and a whole lot more. The A16 Bionic chip is an unstoppable powerhouse that will make quick work of any app. ",
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MM1Q3?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1634345184000'
  },
  {
    id: 3,
    name: 'iPhone 14',
    price: 799,
    description: 'With Apple iPhone 14 in your pocket, anything the day throws at you is a little bit easier. The A15 Bionic chip beating in its chest can run any app or game without breaking a sweat.',
    img: 'https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960'
  },
  {
    id: 4,
    name: 'iPhone 14 Plus',
    price: 899,
    description: 'With Apple iPhone 14 Plus in your pocket, anything the day throws at you is a little bit easier. The A15 Bionic chip beating in its chest can run any app or game without breaking a sweat.',
    img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663079841-iphone-14-embed-1663079300.jpg'
  },
  {
    id: 5,
    name: 'iPhone 14 Pro',
    price: 1099,
    description: 'A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.',
    img: 'https://www.costco.co.uk/medias/sys_master/images/h37/hc3/119433914056734.jpg'
  },
  {
    id: 6,
    name: 'iPhone 14 Pro Max',
    price: 1199,
    description: "Powerful processor, stunning cameras, and a gorgeous screen. Apple iPhone 14 Pro Max's got it all, and a whole lot more. The A16 Bionic chip is an unstoppable powerhouse that will make quick work of any app.",
    img: 'https://static-www.o2.co.uk/sites/default/files/iphone-14-pro-max-silicone-midnight-sku-header-090922.png'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/