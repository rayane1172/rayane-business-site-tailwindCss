/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        'open' :['Open Sans', 'sans-serif']
      },
      keyframes:{
        rotate180:{
          '0%':{transform:'rotate(0deg)'},
          '100%': {transform:'rotate(180deg)'},
        },
        rotatesmall:{
          '0%':{transform:'rotate(0deg)'},
          '100%': {transform:'rotate(-20deg)'},
        },
        // smoothMarcheleft:{
        //   '0%':{
        //         left:'-2rem',
        //         width:'1rem',
        //         height:'1rem',
        // },
        //   '50%':{
        //         left:'0',
        //         width:'1rem',
        //         height:'1rem',
        //         backgroundColor:'#334155',
        //         borderRadius:'none'
        //   },
        //   '100%':{
        //         left:'0',
        //         width:'120%',
        //         height:'100%',
        //         backgroundColor:'#334155',
        //   }

        // },
        smoothMarcheright:{
          '0%':{
                right:'-2.5rem',
                width:'5px',
                height:'100%',
                backgroundColor:'orange',
        },
          '50%':{
                right:'0',
                width:'5px',
                height:'100%',
                backgroundColor:'#334155',
          },
          '100%':{
                right:'0px',
                width:'100%',
                height:'100%',
                backgroundColor:'#334155',
          }

        },
        // smoothMarcherightname:{
        //   '0%':{
        //         right:'-2.5rem',
        //         width:'5px',
        //         height:'1rem',
        //         backgroundColor:'orange',
        // },
        //   '50%':{
        //         right:'0',
        //         width:'5px',
        //         height:'1rem',
        //         backgroundColor:'#e5e7eb',
        //   },
        //   '100%':{
        //         right:'0px',
        //         width:'100%',
        //         height:'100%',
        //         backgroundColor:'#e5e7eb',
        //   }

        // },
      },
      animation: {
        oneturn:'rotate180 1.5s ease-in-out infinite alternate',
        smallturn:'rotatesmall 0.5s ease-in-out infinite alternate',
        // smoothMarcheleft:'smoothMarcheleft 1.2s linear alternate infinite',
        smoothMarcheright:'smoothMarcheright 1.5s linear alternate infinite',
        // smoothMarcherightname:'smoothMarcherightname 1.5s linear alternate infinite'
      },
      spacing:{
        'screen-1/2':'50vh', 
      },
      // TODO: VERY IMPORTANT TO ADD 50VH SPACE IN A RULE
    },
    keyframes:{
      bounce:{
          '0%,100%':{transform:'translateY(0)'},
          '50%': {transform:'translateY(-15px)'},
        },
    },
    animation:{
      bounce:'bounce 1s ease-in-out infinite alternate'
    }

  },
  plugins: [],
}

