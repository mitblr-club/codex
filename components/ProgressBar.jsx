import React from "react";
import Router from "next/router";
import NProgress from "nprogress";

// Modified from https://github.com/apal21/nextjs-progressbar

NProgress.configure({ showSpinner: false })

export default class ProgressBar extends React.Component {
	static defaultProps = {
		color: "#d8b4fe",
		startPosition: 0.3,
		stopDelayMs: 200,
		height: 6,
	};

	timer = null;

	routeChangeStart = () => {
		NProgress.set(this.props.startPosition);
		NProgress.start();
	  };
	
	routeChangeEnd = () => {
		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			NProgress.done(true);
		}, this.props.stopDelayMs);
	};
	
	render() {
		const { color, height } = this.props;
	
		return (
			<style jsx global>{`
				#nprogress {
					pointer-events: none;
				}

				#nprogress .bar {
					background: ${color};
					position: fixed;
					z-index: 1031;
					top: 0;
					left: 0;
					width: 100%;
					height: ${height}px;
				}

				#nprogress .peg {
					display: block;
					position: absolute;
					right: 0px;
					width: 100px;
					height: 100%;
					box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
					opacity: 1;
					-webkit-transform: rotate(3deg) translate(0px, -4px);
					-ms-transform: rotate(3deg) translate(0px, -4px);
					transform: rotate(3deg) translate(0px, -4px);
				}

				.nprogress-custom-parent {
					overflow: hidden;
					position: relative;
				}

				.nprogress-custom-parent #nprogress .bar {
					position: absolute;
				}
			`}</style>);
	}
	
	componentDidMount() {	
		Router.events.on('routeChangeStart', this.routeChangeStart);
		Router.events.on('routeChangeComplete', this.routeChangeEnd);
		Router.events.on('routeChangeError', this.routeChangeEnd);
	}
}