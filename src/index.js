import { registerBlockType } from '@wordpress/blocks';
import CastosPlayer from "./components/CastosPlayer";
import EditPlayer from './components/EditPlayer';
/**
 * Castos Player block
 * Delete block_editor.css
 * Update block_style.css with any missing css
 * Rename block class to match class name
 * Remove todo in frontend controller
 * Update readme
 * Change APP_URL values
 * Remove CastosPlayer.css
 * Either move EpisodeSelector code to EpisodeSelector Component, or delete it
 * Rebase beta off current master to bring up to date with latest changes
 * Don't load the block when editing a podcast enabled post type
 */
registerBlockType('seriously-simple-podcasting/castos-player', {

	title: 'Castos Player',

	icon: 'controls-volumeon',

	category: 'layout',

	supports: {
		multiple: false,
	},

	attributes: {
		id: {
			type: 'number',
		},
		image: {
			type: 'string',
		},
		file: {
			type: 'string',
		},
		title: {
			type: 'string',
		},
		duration: {
			type: 'string',
		},
		download: {
			type: 'string',
		},
	},

	edit: EditPlayer,

	save: (props, className) => {
		const { id, image, file, title, duration, download } = props.attributes;
		return (
			<CastosPlayer
				className={className}
				episodeImage={image}
				episodeFileUrl={file}
				episodeTitle={title}
				episodeDuration={duration}
				episodeDownloadUrl={download}
			/>
		);
	},
});
