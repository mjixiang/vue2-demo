<template>
	<div class="xa-page">
		<ul>
			<li v-for="(item,index) in arr">{{ `${index}、${item.name}(${item.age}岁)` }}</li>
		</ul>
    <div>
      <div v-for="obj in arr">
        <label>姓名：</label><input v-model="obj.name" type="text"><br>
        <label>年龄：</label><input v-model.number="obj.age" type="number" min=0><br><br>
      </div>
    </div>
    <button @click="addMan" ref="btn">添加一个人</button>
    <br><hr>
		<h2>key-value</h2>
		<table border="1" width="100%;">
			<tr>
				<td>key</td>
				<td>value</td>
			</tr>
			<tr v-for="(value,key) in obj">
				<td>{{ key }}</td>
				<td>{{ value }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				arr:[
					{name:'张三',age:11},
					{name:'李四',age:33}
				],
				obj:{
					'水果':'苹果',
					'歌曲':'小苹果',
					'手机':'苹果s'
				}
			}
		},
		methods:{
			addMan(){
				this.arr.push({name:'',age:''})
			}
		},
		mounted(){
			//mounted+nextTick取代ready
			this.$nextTick(()=>{
				console.log(this.$refs.btn)
			})
		}
	}
</script>
