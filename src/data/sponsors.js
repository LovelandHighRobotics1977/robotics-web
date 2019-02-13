import nasa_logo from "./../assets/images/nasa-logo.png";
import grumman_logo from "./../assets/images/grumman-logo.svg";
import ottercares_logo from "./../assets/images/ottercares-logo.svg";
import us_logo from "./../assets/images/us-logo.svg";
import ptc_logo from "./../assets/images/ptc-logo.svg";
import lowes_logo from "./../assets/images/lowes-logo.svg";
import lockheed_logo from "./../assets/images/lockheed-logo.svg";

export default {
    sponsors: [
        {
            logo: nasa_logo,
            logo_sizing: "width: 10rem; height: 10rem",
            url: "https://nasa.gov/",
            title: "Nasa",
            description: ["2019 - Sustainability Grant - $5000"]
        },
        {
            logo: grumman_logo,
            logo_sizing: "width: 10rem; height: 10rem",
            url: "http://www.northropgrumman.com",
            title: "Northrup Gruman",
            description: ["2017 - $1600", "2018 - $2400", "2019 - $1400"]
        },
        {
            logo: ottercares_logo,
            logo_sizing: "width: 13rem; height: 10rem; padding-left: 0.7rem;",
            url: "https://www.ottercares.org/",
            title: "Ottercares",
            description: ["2016 - Impact Grant - $18600", "2018 - Innovation Station - $25000"]
        },
        {
            url: "https://www.jbcsllc.com/",
            title: "Beatty Construction",
            description: ["2019 - $1000"]
        },
        {
            logo: us_logo,
            logo_sizing: "width: 10rem; height: 10rem;",
            url: "https://www.usengineering.com/",
            title: "US Engineering",
            description: ["2017 - $500", "2018 - $500"]
        },
        {
            logo: ptc_logo,
            url: "https://www.ptc.com/",
            title: "PTC",
            description: ["2017 - $2000"]
        },
        {
            logo: lowes_logo,
            url: "https://www.lowes.com/",
            title: "Lowe's",
            description: ["2016 - Toolbox for Educators - $5000"]
        },
        {
            logo: lockheed_logo,
            logo_sizing: "width: 14rem; height: 14rem;",
            url: "https://www.lockheedmartin.com/",
            title: "Lockheed Martin",
            description: ["2016 - $1600"]
        },
    ]
}