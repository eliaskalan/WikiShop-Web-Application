# **WikiShop Web Application**

This is a web application that allows users to browse and purchase products from the WikiShop online store. The application is built using a client-server architecture, with the client implemented as a series of HTML pages and the server implemented using Node.js and the Express framework.

## **Live site:**
You can Visit the live site here: https://e-commerce-g88r.onrender.com/ (needs apx. 1 minute to load)
## **Features**

The web application supports the following features:

1. Product category navigation: Users can browse through different product categories and view the products within each category.
2. Product filtering by sub-category: Users can filter products based on the sub-category they belong to.
3. Adding products to the cart: Users can add products to their shopping cart. Successful identification (login) is required before adding products.
4. Viewing the shopping cart: Users can view the contents of their shopping cart, including product details and total cost.

## **Installation and Setup**

To run the WikiShop web application, follow these steps:

1. Clone the repository:
    
    ```
    bashCopy code
    git clone https://github.com/your-username/your-repo.git
    
    ```
    
2. Install dependencies:
    
    ```
    bashCopy code
    cd your-repo
    npm install
    
    ```
    
3. Start the server:
    
    ```
    bashCopy code
    npm start
    
    ```
    
4. Open your web browser and visit **`http://localhost:3000`** to access the web application.

## **API Endpoints**

The server provides the following API endpoints:

- **`GET /categories`**: Get a list of product categories.
- **`GET /categories/:id/subcategories`**: Get a list of subcategories for a given category ID.
- **`GET /categories/:id/products`**: Get a list of products for a given category ID.

## **Libraries and Frameworks**

The WikiShop web application uses the following libraries and frameworks:

- Handlebars: For HTML templating and generating dynamic content.
- Node.js: For server-side implementation.
- Express: Web framework for Node.js.
- uuid: For generating unique identifiers for user sessions.

## **Code Organization**

The codebase is organized as follows:

- **`public`**: Contains static files (HTML, CSS, client-side JavaScript).
- **`src`**: Contains server-side code.
    - **`controllers`**: Implements the API endpoints and business logic.
    - **`data`**: Contains Data Access Objects (DAOs) for managing user and cart data.
    - **`routes`**: Defines the routes for different API endpoints.
    - **`views`**: Contains Handlebars templates for generating HTML content.

## **Bonus Functionality**

Integration with a real database can be implemented to store user and cart data persistently. If a real database is integrated, an appropriate implementation of the DAO objects will be required.

## **Credits**

This web application is developed by [@giannistolou] (https://github.com/giannistolou), [@eliaskalan] (https://github.com/eliaskalan).



## **License**

This project is licensed under the **[MIT License](https://chat.openai.com/LICENSE)**.
