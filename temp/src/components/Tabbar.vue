<template>
	<div class="tabbar">
		<item txt='首页' mark='home' :curr='currt' @change='getVal'>
			<img slot='norimg' src="../assets/images/ic_tab_home_normal.png" />
			<img slot='actimg' src="../assets/images/ic_tab_home_active.png" />
		</item>
		<item txt='书影音' mark='broadcast' :curr='currt' @change='getVal'>
			<img slot='norimg' src="../assets/images/ic_tab_subject_normal.png" />
			<img slot='actimg' src="../assets/images/ic_tab_subject_active.png" />
		</item>
		<item txt='广播' mark='audio' :curr='currt' @change='getVal'>
			<img slot='norimg' src="../assets/images/ic_tab_status_normal.png" />
			<img slot='actimg' src="../assets/images/ic_tab_status_active.png" />
		</item>
		<item txt='小组' mark='group' :curr='currt' @change='getVal'>
			<img slot='norimg' src="../assets/images/ic_tab_group_normal.png" />
			<img slot='actimg' src="../assets/images/ic_tab_group_active.png" />
		</item>
		<item txt='我的' mark='mine' :curr='currt' @change='getVal'>
			<img slot='norimg' src="../assets/images/ic_tab_profile_normal.png" />
			<img slot='actimg' src="../assets/images/ic_tab_profile_active.png" />
		</item>
	</div>
</template>

<script>
	import item from './item'
	export default {
		name: 'tabbar',
		components: {
			item
		},
		data: function() {
			return {
				currt: 'home'
			}
		},
		methods: {
			getVal(val) {
				this.currt = val;
			}
		}
	}
</script>

<style scoped>
	.tabbar {
		position: fixed;
		padding:10px 0;
		width: 100%;
		height: 200/100rem;
		bottom: 0;
		left: 0;
		border-top: 1px solid gray;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>