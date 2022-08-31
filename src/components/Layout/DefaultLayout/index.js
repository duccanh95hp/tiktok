import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import className from 'classnames/bind';


const cs = className.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cs('wrapper')}>
            <Header />
            <div className={cs('container')}>
                <Sidebar />
                <div className={cs('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
