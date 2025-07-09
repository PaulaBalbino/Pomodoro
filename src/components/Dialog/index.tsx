
import { ToastContentProps } from 'react-toastify';
import { DefaultButton } from '../DefaultButton';
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';

import styles from './styles.module.css';

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
	return (
		<>
			<div className={styles.container}>
				<p>{data}</p>

				<div className={styles.buttonsContainer}>
					<DefaultButton
						onClick={() => closeToast(true)}
						icon={<ThumbsUpIcon />}
						aria-label='Confirm and close'
						title='Confirm and close'
					/>
					<DefaultButton
						onClick={() => closeToast(false)}
						icon={<ThumbsDownIcon />}
						color='red'
						aria-label='Cancel and close'
						title='Cancel and close'
					/>
				</div>
			</div>
		</>
	);
}