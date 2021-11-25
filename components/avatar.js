export default function Avatar({ name, picture }) {
	return (
		<div className="flex items-center">
			<div className="w-12 h-12 relative mr-4">
				<span
					className="w-12 h-12 block rounded-full"
					style={{
						background: `url(${picture.filename}) no-repeat center center/cover`,
					}}
				></span>
			</div>
			<div className="text-xl font-bold">{name}</div>
		</div>
	);
}
