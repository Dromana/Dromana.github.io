const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const particleArray = []

const number_of_particles = 1
const particles_size = 5
const speedx = 3
const speedy = 3
const draw_line_distance = 200
let hue = 50
const color_speed = 0.2
/* Particles 2 (text) configs */
const max_size_letter = 35
const skills = ['Python3','Flask','Selenium','Javascript','Html5','C','Bash','Shell Scrips','gRPC','REST API','Bootstrap 4 & 5','Swagger',
                'Networking','TR-69','TR-181','Docsis 3.0','Docsis 3.1','FFTH','Arp','DHCP','ICMP',
                'Windows','Linux & Unix','Wi-Fi 5','Wi-fi 6','TR-398','SaaS','Iaas','Azure','Ubunto',
                'Docker','Virtual Machines','Routers','Kibana','Elastic Search','Automation','Telegram API',
                'Rasberry Pi','ESP8866','LTSpice','Embedded Systems','Arduino',
                'Mysql','SQLite3','Matlab','Sip','Integration','Git','Jira','Agile','Micro Services',
                'FastAPI','Kafka','Syslog','Distributed System','Cypress','PlayWright','RobotFramework','X-ray','Pipelines','Github','Bitbucket']
const about_me = ['Proactive','Family','Friends','Fun','Objective','Jokes','Laugh','Structural Thinking','Lasagna','Beach','Swim','Drinks','Beer','Wine','Right tool for the job',
                'Out of the box','Passion','Music','Sports','True']
const companys = ['Askey','Sagem','Hitron','NOS','Bold by Devoteam','Huawei','Isel','Auto Tests Framework','Lab Designer','Lab maintainer','Usercentrics','EDP','Diconium',
                 'Neotalent','Kwan'
                ]
var current_working_words = []

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = 'black';

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.background = 'black';
});

const mouse = {
    x: undefined,
    y: undefined,
}

window.addEventListener('click', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    for(let i = 0; i < 50; i++){
        particleArray.push(new Particle())
    }
})

canvas.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    /* for(let i = 0 ; i < number_of_particles ; i++){
        particleArray.push(new Particle())
    } */
})


class Particle {
    constructor(){
        /* this.x = mouse.x;
        this.y = mouse.y; */
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * particles_size + 1;
        this.speedx = Math.random() * 3 - 1.5;
        this.speedy = Math.random() * 3 - 1.5;
        //this.speedx = speedx;
        //this.speedy = speedy;
        this.color = "hsl(" + hue + ",100%,50%)"
    }
    update(){
        this.x += this.speedx;
        this.y += this.speedy;
        if(this.size > 0.2){
             this.size -= 0.1;
        }
    }
    draw(){
        ctx.fillStyle = this.color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill();
    }
}


class WordParticle {
    constructor(string_to_show){
        this.name = string_to_show
        /* this.x = mouse.x;
        this.y = mouse.y; */
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.floor(Math.random() * max_size_letter);
        this.speedx = Math.random() * 3 - 1.5;
        this.speedy = Math.random() * 3 - 1.5;
        //this.speedx = speedx;
        //this.speedy = speedy;
        this.color = "hsl(" + hue + ",100%,50%)"
    }
    update(){
        this.x += this.speedx;
        this.y += this.speedy;
        if(this.size > 0.2){
             this.size -= 0.1;
        }
    }
    draw(){
        ctx.fillStyle = this.color
        ctx.textAlign = "center";
        ctx.font = this.size + "px Georgia";
        ctx.fillText(this.name, this.x, this.y);
    }
}


function handleParticles(){
    for(let i = 0; i < particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
        for(let j = i; j < particleArray.length; j++){
            const dx = particleArray[i].x - particleArray[j].x;
            const dy = particleArray[i].y - particleArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if(distance < draw_line_distance){
                ctx.beginPath()
                ctx.strokeStyle = particleArray[i].color;
                ctx.lineWidth = 0.3;
                ctx.moveTo(particleArray[i].x, particleArray[i].y)
                ctx.lineTo(particleArray[j].x, particleArray[j].y)
                ctx.stroke();
            }
        }
        if(particleArray[i].size <= 2){
            particleArray.splice(i, 1)
            i--;
        }
    }
}

var wordIndex = 0
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(particleArray.length <= current_working_words.length){
        for(let i = 0; i < number_of_particles; i++){
            //particleArray.push(new Particle())
            if(wordIndex >= (current_working_words.length - 1)){ wordIndex = 0 }
            else{ wordIndex++ }
            particleArray.push(new WordParticle(current_working_words[wordIndex]))
        }
        hue += color_speed;
    }
    /* ctx.fillStyle = 'rgba(0,0,0,.0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height); */
    handleParticles();
    requestAnimationFrame(animate)
}
