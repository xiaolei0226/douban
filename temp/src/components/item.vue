<template>
	<div class="item" @click="fn">
		<span v-show="!flag"><slot name='norimg'></slot></span>
		<span v-show="flag"><slot name='actimg'></slot></span>
		<br />
		<span>{{txt}}</span>
	</div>
</template>

<script>
	export default {
		name: 'item',
		props: ['txt', 'mark', 'curr'],
		computed: {
			flag() {
				if(this.mark == this.curr) {
					return true;
				}
				return false;
			}
		},
		methods: {
			fn() {
				this.$emit('change', this.mark);
				this.$router.push('/' + this.mark).catch(err=>{
					console.log(err)
				});
			}
		}
	}
</script>

<style scoped>
	.item {
		flex: 1
	}
	
	.item span {
		font-size: 12px;
	}
	
	.item img {
		/*width: 80/100rem;*/
		width: 40px;
	}
</style>