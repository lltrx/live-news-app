# Live News Web

This is a live news website built with Next.js 13 as the frontend and the Stack Media API to get the news. It's designed to display news articles in a user-friendly way, with easy navigation and search capabilities.

## Getting Started

To get started with this project, you will need to have the following tools installed:
```
Node.js
npm or yarn
Git
```
You will also need to obtain an API key from the Media Stack API in order to access their news articles. You can sign up for a free account to obtain an API key. Also a Stepzsen account to get the APi key.

To install and run the project, follow these steps:

Clone this repository to your local machine using the command git clone https://github.com/your-username/your-repo.git
Navigate to the project directory with cd your-repo
Install the dependencies with npm install or yarn install
Create a .env.local file in the project root directory and add your Media Satcj API key, Stepzen api key, like this:
makefile
```
MEADISTACK_API_KEY=your-api-key
STEPZEN_API_KEY=your-api-key
```
Run the development server with npm run dev or yarn dev
Open your browser and navigate to http://localhost:3000 to view the website
Folder Structure

The project has the following folder structure:
``
/lib - contains helper functions and utility files
/pages - contains the website's apis.
/app - contains the app pages and components.
/public - contains static files, such as images and fonts
```
Fetching News Articles

To fetch news articles, the project uses the Stack Media API. You can customize the types of articles and categories you want to display by editing the API query in the lib/stack-api.js file. The website will automatically fetch and display the latest news articles from the API.

### Running the Project

To run the project, navigate to the project directory and run the following command:

```
npm run dev
``
This will start the development server and open the website in your default browser. Any changes you make to the code will be automatically reloaded, so you can see the results of your changes in real-time.

### Deployment

To deploy the project, you can use a hosting service like Vercel or Netlify, which offer easy integration with Next.js projects. You will need to configure your project to build and deploy the frontend code.

To deploy the Stack Media API, you can use the hosting service of your choice. You will need to obtain your API key and update the .env.local file with the new API key.

### Conclusion

This live news website is a great starting point for building a personalized news website. It's built with modern tools and frameworks, and is designed to be easily customizable and extendable. Use it as a starting point, and build on it to create a unique and personalized website that displays the latest news articles.
