<template>
  <div class="rate">
    <label class="checked" for="star5" title="5"></label>
    <label class="checked" for="star4" title="4"></label>
    <label class="checked" for="star3" title="3"></label>
    <label class="checked" for="star2" title="2"></label>
    <label class="checked" for="star1" title="1"></label>
  </div>
</template>

<style type="text/css" scoped="true">
.rate {
  display: block;
  min-height: 60px;
  width: -moz-fit-content;
  width: fit-content;
  min-width: 300px;
}

.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 60px;
  color: #ccc;
}
.rate:not(:checked) > label:before {
  content: "★ ";
}
.rate > input:checked ~ label {
  color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}

.checked {
  color: #ffc700 !important;
}

/* Modified from: https://github.com/mukulkant/Star-rating-using-pure-css */
</style>

<i18n>
{
  "es":{

  },
  "en":{
    
  },
  "eus":{
    
  }
}
</i18n>