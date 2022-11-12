import passGen from '../../assets/password-gen.png';
import weatherDash from '../../assets/weather-dashboard.png';
import workdaySched from '../../assets/work-day-sched.png';
import proj1 from '../../assets/project1.png';
import proj2 from '../../assets/proj2.png';
import proj3 from '../../assets/happy-camper.png'

export const ProjectData = [
    {
        id:1,
        title:'Cat and Dog Adoption Search',
        about:'This group project used a third-party API to search for animals in shelters that are able to be adopted and then display them to the user.',
        demo:'https://erin-maxson.github.io/cat-and-dog-adoption-search/',
        github:'https://github.com/erin-maxson/cat-and-dog-adoption-search',
        image: proj1
    },
    {
        id:2,
        title:'Happy Camper',
        about: 'This project allows you to create and save custom pins on a map to save locations that you enjoyed on your trip, or plan another trip!',
        demo:'https://project-3-osu-akf.herokuapp.com/',
        github:'https://github.com/erin-maxson/happy-camper',
        image: proj3

    },
    {
        id:3,
        title:'Weather Dashboard',
        about:'This project used the OpenWeather API to search for weather in a user-defined city and render the results to cards.',
        demo:'https://codebiskut.github.io/Weather-Dashboard/',
        github:'https://github.com/codeBiskut/Weather-Dashboard',
        image: weatherDash
    },
    {
        id:4,
        title:'Workday Scheduler',
        about:'This project allows you to schedule your work day via hour timeblocks, and displays whether the event is past, present, or future.',
        demo:'https://codebiskut.github.io/Work-Day-Scheduler/',
        github:'https://github.com/codeBiskut/Work-Day-Scheduler',
        image: workdaySched
    },
    {
        id:5,
        title:'Password Generator',
        about: 'Generate a secure password with this program! It asks the user a series of questions about what they would like to include in the password, then generates the password and displays it in an alert.',
        demo:'https://codebiskut.github.io/c3_password_generator/',
        github:'https://github.com/codeBiskut/c3_password_generator',
        image: passGen
    },
    {
        id:6,
        title:'Coder\'s Almanac',
        about:'This is a site to view planting dates and plant information! Default plants are provided, and users can signup and enter their own custom plants.',
        demo:'https://project-two-enm.herokuapp.com/',
        github:'https://github.com/erin-maxson/coders-almanac',
        image: proj2
    }
];