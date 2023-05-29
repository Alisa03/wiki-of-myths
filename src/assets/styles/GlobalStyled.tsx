import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    button {
        background: none;
        border: none;
    }
    input {
        outline:none;
        border: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    li {list-style: none}
    img {object-fit: cover}
    html {font-size: 16px;
        background: #000
    }
    html::-webkit-scrollbar {
        background: inherit;
        border-radius: 18px;
        width: 5px;
    }

    html::-webkit-scrollbar-thumb {
    border-radius: 18px;
    box-shadow: inset 0 0 6px #947772;
    width: 10px;

    @media (max-width: 770px) {
        html {
            font-size: 14px
        }
    }

    @media (max-width: 400px) {
        html {
            font-size: 13px
        }
    }

`
