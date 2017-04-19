<template>
	<div class="header">
		<div class="page-logo">
			<a href="#">应用市场</a>
		</div>
	</div>
</template>
<script>
export default {
  name: 'header',
  data () {
    // return {
    //   msg: ''
    // }
  }
}

</script>
<style>
.header{
	margin:0px;
	padding: 0px;
	width: 100%;
	height: 46px;
	min-height: 46px;
	top:0;
	background-color: #1f1f1f;
}
.page-logo{
	float: left;
	display: block;
	width: 235px;
	height: 46px;
	padding-right: 20px;
	padding-left: 20px;
}
.page-logo a{
	font-weight: bold;
	color: white;
	line-height: 46px;
	font-size: 14px;
	text-decoration: none;
}
</style>
