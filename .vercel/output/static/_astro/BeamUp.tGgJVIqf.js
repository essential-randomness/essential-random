import{j as t}from"./jsx-runtime.71-12QHI.js";import{R as i}from"./index.L7U8C2oA.js";const u=({label:a,startFromFragment:o,beamToFragment:s})=>{const[e,l]=i.useState(!1),n=i.useRef(null);return i.useEffect(()=>{const r=()=>{if(!n.current)return;(o?(document.getElementById(o)?.getBoundingClientRect().top||0)<0:document.documentElement.scrollTop>50)?e||l(!0):e&&l(!1)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[e,o]),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:`elevator ${e?"visible":"hidden"}`,ref:n,onClick:()=>document.documentElement.scrollTo({top:s&&document.getElementById(s)?.offsetTop||0,behavior:"smooth"}),children:a??"Beam me up!"}),t.jsx("style",{children:`
        .elevator {
          position: fixed;
          bottom: 30px;
          border-radius: 30px;
          background-color: black;
          color: white;
          text-align: center;
          right: 30px;
          padding: 10px 20px;
          box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
          z-index: 10;
        }

        .elevator:hover {
          cursor: pointer;
        }

        .elevator.visible {
          visibility: visible;
          opacity: 1;
          transition: visibility 0.3s ease-out, opacity 0.3s ease-out;
        }

        .elevator.hidden {
          visibility: hidden;
          opacity: 0;
          transition: visibility 0.3s ease-out, opacity 0.3s ease-out;
        }

        @media only screen and (max-width: 600px) {
          .elevator {
            right: auto;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `})]})};export{u as default};
