import styles from './Error.module.scss';
import error from '../../../assets/images/error.png';

import buttonStyles from '../../../scss/button.module.scss';
import {useGetDocumentStructure} from "../../../hooks/useGetDocumentStructure";
import {Tooltip} from "../Tooltip/Tooltip";
import {TestRoles} from "../../../test/testRoles";

export const Error: React.FC = () => {
    const { refetch } = useGetDocumentStructure();

    return (
        <section
            className={styles.error}
            role={TestRoles.Error}
        >
            <div className={styles.imageContainer}>
                <img
                    className={styles.somethingWentWrong}
                    alt="something went wrong"
                    src={error}
                />
            </div>
            <h3>Something went wrong!</h3>
            <p className={styles.transparentText}>
                Brace yourself till we get error fixed
            </p>
            <p className={styles.transparentText}>
                You may also refresh the page and try again later!
            </p>
            <Tooltip position={'bottom'} text={'refresh data'}>
                <button
                    role={TestRoles.ButtonErrorRefetch}
                    className={`${buttonStyles.btn} ${styles.retryBtn}`}
                    onClick={() => refetch()}
                >
                    Try again
                </button>
            </Tooltip>
        </section>
    );
};