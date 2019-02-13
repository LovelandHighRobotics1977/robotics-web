import insta_logo from "./../assets/images/insta-logo.svg";
import fb_logo from "./../assets/images/facebook-logo.svg";
import twitter_logo from "./../assets/images/twitter-logo.svg";
import loveland_logo from "./../assets/images/loveland-logo.svg";
import first_logo from "./../assets/images/first-logo.svg";

export default {
    links: [
        {
            logo: insta_logo,
            url: "https://www.instagram.com/roboticsoflhs/",
            title: "Instagram"
        },
        {
            logo: fb_logo,
            url: "https://www.facebook.com/LHRobotics/",
            title: "Facebook"
        },
        {
            logo: twitter_logo,
            url: "https://twitter.com/roboticsofLHS",
            title: "Twitter"
        },
        {
            logo: loveland_logo,
            url: "https://www.thompsonschools.org/loveland",
            title: "Loveland",
            description: [
                "At Loveland High, we truly live up to our slogen, 'Be Loveland. Be the best.' We offer a wide variety of sport and extracurriculars that allow students to explore and pursue their interests. In addition, Loveland High has a tight knit community between our students and staff because there are so many ways to be involved."
            ]
        },
        {
            logo: first_logo,
            url: "https://www.firstinspires.org/robotics/frc",
            title: "FIRST Robotics",
            description: [
                "The hosts of one of the biggest annual nationwide competitions for robotics. They construct several objectives in which teams create subsystems for their robots to assist in completing said tasks in order to score points."
            ]
        }
    ]
}