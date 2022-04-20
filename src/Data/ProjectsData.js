import coinbased from "../Images/coinbase.jpg";
import coinbasedMobile from "../Images/coinbase-mobile.jpg";
import tracker from "../Images/tracker.jpg";
import trackerMobile from "../Images/tracker-mobile.jpg";
import movies from "../Images/movies.jpg";
import movieMobile from "../Images/movie-mobile.jpg";
import visualiser from "../Images/lis.jpg";
import lisMobile from "../Images/visualiser-mobile.jpg";
import Firebry from "../Images/Firebry.jpg";
import FirebryMobile from "../Images/FirebryMobile.jpg";

const mainData = [ 
    {
        name: "FIREBRY",
        subName: "IMAGE STORAGE APPLICATION",
        desc1: "Firebry is an photo storage application with full authentication and sign-up where users are able to store their moments. Users are able to upload images along with a title, description and location",
        desc2: "and view images they have previously uploaded. Firebry is built with Google Firebase Backend and React Frontend.",
        githubLink: "https://github.com/SuKaiwen/Firebry",
        siteLink: "https://firebry-info.vercel.app/",
        mainImage: Firebry,
        mobileImage: FirebryMobile
    },
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
    }
]

export default mainData;