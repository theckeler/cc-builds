const Video = ({ img, ytVideo, className, addStyle, title }) => {
	const urlEnd = "autoplay=1&mute=1&enablejsapi=1";

	return (
		<div
			className={`video-wrapper position-relative ${className}`}
			style={addStyle}>
			<iframe
				src={`https://www.youtube.com/embed/${ytVideo}?${urlEnd}`}
				srcDoc={`
<style>
  *{padding:0;margin:0;overflow:hidden}
  html,body{height:100%}
</style>
<a href="https://www.youtube.com/embed/${ytVideo}?${urlEnd}" style="display:flex;width:100%;height:100%">
    <img src="${img}" alt="" style="width:100%;height:100%;object-fit:cover" loading=lazy>
    <span style="position:absolute;left:50%;top:50%;margin:auto;transform:translate(-50%,-50%);border:3px solid #fff;width:120px;height:120px;display:flex;justify-content:center;align-items:center;border-radius:100%;color:#fff;font-size:2.8125em">▶</span>
</a>
`}
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title={title}
				width="100%"
				height="100%"
				className={`border-0 video`}></iframe>
		</div>
	);
};

export default Video;
