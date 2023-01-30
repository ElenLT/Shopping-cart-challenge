# Cabify Shopping Cart Challenge - Elena López-Tello
# Documentation

## Context and Problem Statement

Having the following data:

````
Code         | Name                |  Price
-------------------------------------------------
CAP          | Cabify Cap          |   5.00€
TSHIRT       | Cabify T-Shirt      |  20.00€
MUG          | Cafify Coffee Mug   |   7.50€
````

- 2-for-1 promotions: buy two of the same product, get one free, applied to `CAP` items.
- bulk discounts: buying 3 or more of `TSHIRT` product, the price of that product is reduced 5%.


Implement a cart logic with:
  - A Checkout class, that can be instantiated with products and discounts available.
  - That allows adding products to the checkout with the `scan` method, passing the product ID as `string` in his first argument.
  - That allows calculating the total price with the `total` method, which won't accept any arguments and will return the total price (discount already applied) as `number`.
  - Markup descomposition in components or whatever it suits you better to make it a production ready App.
  - The presentation logic to update "Order summary" subsection whenever a product is added or removed.
  - A `Checkout` class to get the total and discounts

### Framework used

The framework chosen for the development is React JS, in the 18.2.0 version.
The reasons for choosing is that is one of the most used frameworks at the moment and my experience is mainly with React.

### Project structure and improvements

- The app is divided in two main components (shopping cart and order summary) that contain all the components structure.
- There's a checkout page that renders both components.
- To pass the data thorugh components, there's been used React context.
- There's a checkout Class that has discount, products and currency as properties and Pricing Rules as argument. It also contains a scan methos that adds produts to the cart, a remove method that removes desired items from the cart and four different total methods: one that returns the total numbers, another one that returns the total price withous the discounts, other that returns the discounts that would be applied in case the items meet the conditions, and finally a total method that calculates the total cost.
The decision of dividing the different total was taken because this values need to be shown in some parts of the app.
- Discounts, pricingRules and products are the interfaces used in the checkout class and are contained in the modal folder.
- pricingRules has been 'hardcoded' (in mocks folder), but it would ideally be a mocked server call.
- styles have been divided between components, but those that apply to different elements or classes has been stored in global. They would ideally be divided between each component as well.

### Extra Dependencies

- ESlint: to ling (airbnb) (https://eslint.org/)
- Prettier: to format on save https://prettier.io/
- EditorConfig: to mantain consisten conding style

