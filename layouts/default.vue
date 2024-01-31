<template>
  <div>
    <NuxtPage /> 
  </div> 
</template>

<script setup lang="ts">
import '@/public/fonts/fonts.css';
</script>

<style>
  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    transition: opacity 0.2s ease-in-out;
  }

  a:hover {
    opacity: 0.8;
  }

  body {
    font-family: 'Anonymous Pro', monospace;
    min-width: 375px;
    font-size: 20px;
    line-height: 1.5;
    margin: 0;
    background-color: #008793;
    background-size: cover;
    background-attachment: fixed;
    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  }

  img {
    max-width: 100%;
  }

  .article {
    background-color: #fff;
    padding: 2em;
    border-radius: 40px;
    width: 80%;
    margin: 80px auto;
  }
  

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rubic One', monospace;
    font-weight: 400;
    margin: 1em 0;
    text-transform: uppercase;
    text-wrap: balance;
    hyphens: auto;
    -webkit-hyphens: auto;
  }

  h1 {
    margin-top: 0.5em;
    font-size: 4em;
  }

  h2 {
    font-size: 3em;
  }

  h3 {
    font-size: 2em;
  }

  .callout {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 1em 0;
    padding: 1em;
  }

  pre:has(code) {
    background-color: #1e1e1e;
    padding: 10px;
    border-radius: 0.2em;
    overflow-x: auto;
  }

  code {
    font-family: 'Anonymous Pro', monospace;
    background-color: #1e1e1e;
    border-radius: 0.2em !important;
    color: #9ECBFF;
    padding: 0.2em 0.3em !important;
  }

  pre {
    white-space: normal !important;
  }

  @media (width <= 1100px) {
    body {
      font-size: 22px;
    }
    .article {
      width: 90%;
    }
    h1 {
      font-size: 3em;
    }
    
    h2 {
      font-size: 2em;
    }

    h3 {
      font-size: 1.5em;
    }
  }

  @media (max-width: 768px) {
    body {
      font-size: 20px;
    }
    .article {
      width: 90%;
      margin: 40px auto;
    }

    h1 {
      font-size: 3em;
    }

    h2 {
      font-size: 2em;
    }

    h3 {
      font-size: 1.5em;
    }
  }

  @media (width <= 700px) {
    body {
      font-size: 16px;
    }
    .article {
      width: 95%;
      margin: 20px auto;
    }

    h1 {
      font-size: 2em;
    }

    h2 {
      font-size: 1.5em;
    }

    h3 {
      font-size: 1.2em;
    }
  }

</style>