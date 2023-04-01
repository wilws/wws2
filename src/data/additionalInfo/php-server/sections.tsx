import { SectionType } from "@/data/projectAdditionalInfo";

const sections: Array<SectionType> = [
  {
    sectionId: 0,
    img: "php-server-s1.png",
    video: null,
    content: `
        <section class="introduction">
        <h3>Introduction</h3>
        <br>
        <p>This is a cross container application with following structure.</p>
        <p>For more details, please go to my <u><a href="https://wilsonsdevnotes.blogspot.com/2022/10/docker-11-cross-container-part-1-docker.html">Personal Blog </a></u></p>
        <br>
        </section>`,
  },
  {
    sectionId: 1,
    img: "php-server-s2.png",
    video: null,
    content: `
        <section class="pull-image">
        <h3>Step 1 - Pull Images from Docker Hub</h3>
        <br>
        <p>Three images "Nginx", "PHP" and "Mysql" are pulled from docker Hub </p>
        <br>
        </section>`,
  },
  {
    sectionId: 2,
    img: "php-server-s3.png",
    video: null,
    content: ` 
        <section class="mysql">
        <h3>Step 2 - Run Mysql Container</h3>
        <br>
        <p>To run mysql container, type in terminal: </p>
        <code class="code">docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -p 33267:3306 -v ~/web/mysql/data:/var/lib/mysql -v ~/web/mysql/conf:/etc/mysql/conf.d -v ~/web/mysql/mysql_sock:/var/run/mysqld -d  --network my-net mysql:8.0.31</code><br><br>
        <p>The command above will create directories in local machine. Those directories will bind to directories in docker host. Data created in app can therefore be persistedly holded in local machine. This folder binding process is called "Bind Mounts".</p>
        <br>
        </section>`,
  },
  {
    sectionId: 3,
    img: "php-server-s4.png",
    video: null,
    content: ` 
        <section class="php">
        <h3>Step 3 - Run php Container</h3>
        <br>
        <p>To run mysql container, type in terminal: </p>
        <code class="code">docker run --name php -p 9000:9000 -v ~/web/www:/var/www/html -v ~/web/mysql/mysql_sock:/var/run/mysqld -d --network my-net php:7.4.33-fpm</code>
        <br><br>
        <p> The php container will run php script in docker host's "www" folder which is binded to the local machine's "www" folder as seen in the picture above. The local machine's "www" folder is the place where we code our php scripts. </p>
        <br>
        </section>`,
  },
  {
    sectionId: 4,
    img: "php-server-s5.png",
    video: null,
    content: `<section class="all_containers">
        <h3>Step 4 - Run Nginx Container</h3>
        <br>
        <p>To run Nginx container, type in terminal: </p>
        <code class="code">docker run --name nginx -p 80:80 -v ~/web/www:/usr/share/nginx/html -v ~/web/nginx/conf.d:/etc/nginx/conf.d --network my-net nginx:1.23.3</code>
        <br><br>
        <p>The php scripts in local machine's "www" folder will also be accessed by Nginx via bind mounted.</p>
        <br>
        </section>`,
  },
  {
    sectionId: 5,
    img: "php-server-s6.png",
    video: null,
    content: `
        <section class="vue">
        <h3>Step 5 - Run Vue Container</h3>
        <br>
        <p>You need to write a dockerfile as below :</p>
        <p>There are two step when dockerising vue container: </p>
        <p>1 - Build app: change vue files to HTML, CSS and JS</p>
        <p>2 - Move the above files (HTML, CSS and JS) to another Nginx Server (not the one in Step 4 )</p><br>
        <p>Now we have one Nginx container acts as backend hosting php script (Step-4); another Nginx cotainer is hosting the vue (frontend) application. Both ends are communicating by REST API.</p>
        <br>
        </section>`,
  },
  {
    sectionId: 6,
    img: "php-server-s7.png",
    video: null,
    content: `
        <section class="summary">
        <h3>Clone the Project</h3>
        <br>
        <p>You can git clone the project from <u><a href="https://github.com/wilws/docker2_cross_container_php-mysql-nginx-vue">here</a></u>.</p>
        <p> After cloning the project in your machine, you can run all four containers by simpliy typing :</p>
        <code class="code">docker-compose up</code>
        <p>To checking the container status, you can use command: <code class="code">docker ps</code></p><br>
        <p> The go to "http://localhost:8080", you should see the app is running like: </p>
        <br>
        </section>
        `,
  },
  {
    sectionId: 7,
    img: null,
    video: null,
    content: `
        <section class="Demo">
        <h3>View App Demo</h3>
        <p >You can view the app demo online <u><a href="https://wilphpserver.epizy.com/">here</a></u>.</p>
        <p class="notice">Please noted that: </p>
        <li class="notice">This online demo is not running on Docker.</li>
        <li class="notice">It is just php scripts stored in web storage.</li>
        <li class="notice">Items will be reseted when refreshing.</li>
        <br>
        </section>`,
  },
];

export default sections;
