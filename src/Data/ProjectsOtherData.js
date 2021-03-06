import snipsnok from '../Images/snipsnok.jpg';
import weather from '../Images/weather.jpg';
import balls from '../Images/balls.jpg';
import visualisersq from "../Images/visualisersq.jpg";

const otherData = [
    {
        name: "VISUALISER",
        desc: "Visualiser is a React application that helps visualise the dynamic programming solution to the longest increasing subsequence problem. While it solves, it pushes steps into a stack and uses a setTimeout to visualise each step once the algorithm has completed.",
        githubLink: "https://github.com/SuKaiwen/visualiser",
        liveSite: "https://visualiser.vercel.app/",
        image: visualisersq
    },
    {
        name: "WEATHER APP",
        desc: "Weather application made in Next.js using OpenWeatherMaps API. View weather data (such as forecast, temperatures and humidity) from various cities around the globe.",
        githubLink: "https://github.com/SuKaiwen/next-weather",
        liveSite: "",
        image: weather
    },
    {
        name: "SNIPSNOK",
        desc: "Created along with team members as a part of a university project, SnipSnok is an application designed to help struggling content creators in Australia. Users can donate to others, follow others and post/like content they enjoy!",
        githubLink: "https://github.com/SuKaiwen/SnipSnok",
        liveSite: "",
        image: snipsnok
    },
    {
        name: "BOUNCING BALLS",
        desc: "Created and developed a physics simulation of balls bouncing within a 3D cube space. Each ball is created as a class with a x, y, z coordinate, x, y, z speed and an update location function which takes into account the laws of physics to set up the trajectory of the ball.",
        githubLink: "https://github.com/SuKaiwen/BouncingBalls",
        liveSite: "",
        image: balls
    }
]

export default otherData;