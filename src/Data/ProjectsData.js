import coinbased from "../Images/coinbase.jpg";
import coinbasedMobile from "../Images/coinbase-mobile.jpg";
import tracker from "../Images/tracker.jpg";
import trackerMobile from "../Images/tracker-mobile.jpg";
import movies from "../Images/movies.jpg";
import movieMobile from "../Images/movie-mobile.jpg";
import visualiser from "../Images/lis.jpg";
import lisMobile from "../Images/visualiser-mobile.jpg";

const mainData = [
    {
        name: "COINBASED",
        subName: "CRYPTO CURRENCY PRICE TRACKER APPLICATION",
        desc1: "Coinbased is a crypto currency price tracker application which users can view popular coins including Etherium, Bitcoin, Dogecoin and more. Users can view metadata such as price charts, 24hour high/low prices and availability.",
        desc2: "In addition to those previously mentioned functionailities, users are also able to search for coins and filter coins by gainers/losers. Coinbased is built in React using the CoinGecko API and hosted on Vercel.",
        githubLink: "https://github.com/SuKaiwen/coinbase",
        siteLink: "https://coinbase-nine.vercel.app/",
        mainImage: coinbased,
        mobileImage: coinbasedMobile
    },
    {
        name: "TRACKER",
        subName: "ISSUE AND PROJECT TRACKING APPLICATION",
        desc1: "Tracker is a clone of a task delegation app similar to Jira. Functionalities include: dragging and dropping issues to a new section/column, searching for an issue, adding new users/tags/issues, viewing an issue and adding a comment.",
        desc2: "This project is created using React and BeautifulDnD (drag and drop library) hosted on Vercel.",
        githubLink: "https://github.com/SuKaiwen/task-assignment",
        siteLink: "https://task-assignment.vercel.app/",
        mainImage: tracker,
        mobileImage: trackerMobile
    },
    {
        name: "MOVIEDB",
        subName: "MOVIE DATABASE APPLICATION",
        desc1: "Movie DB is an application where users can view popular movies, search movies, search genre and view movie metadata such as actors, budget and production companies.",
        desc2: "This project created in React with custom CSS and The Movie DB API and hosted on Vercel.",
        githubLink: "https://github.com/SuKaiwen/movie-app",
        siteLink: "https://movie-app-v4-six.vercel.app/",
        mainImage: movies,
        mobileImage: movieMobile
    },
    {
        name: "VISUALISER",
        subName: "VISUALISATION OF POPULAR PROGRAMMING QUESTION LONGEST INCREASING SUBSEQUENCE",
        desc1: "Visualiser is a React application that helps visualise the dynamic programming solution to the longest increasing subsequence problem. Simply type in numbers in the input box and press submit to add that number to the array.",
        desc2: "Hit solve for the visualisation to take effect. It pushes steps into a stack and uses a setTimeout to visualise each step once the algorithm has completed.",
        githubLink: "https://github.com/SuKaiwen/visualiser",
        siteLink: "https://visualiser.vercel.app/",
        mainImage: visualiser,
        mobileImage: lisMobile
    }
]

export default mainData;