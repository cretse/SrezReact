import { useParams } from 'react-router-dom';
import s from './Product.module.css';
import { OrderFormModal } from '../Modal/Modal';
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Товар 1',
        price: 100,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://yandex-images.clstorage.net/98nCpy352/d95db4An/4HoOFSn2dN1rEKVQjxETqVsYVbG2hVIMVT9ikwh5SWLGxFH88zq9qpNllWkvHCkt4qW1I-g5vFaG31O6cjmwBkVeKwFcYmE5GxD0FD-10gmaGQFwYrQGLcV_FwPIP_qlUZP3DmVdeo0BtDBsShxozHOx9uWZGHhjUXiEvwKL5oAzef51SkbXi6qwBUV-4hJrKSliIeaW5A5Rj1JUr355ZBHQxn8UPft-M8UTLGvdeuhhgJc07eqb0LOY594BuNQTUDhtdzjHdLr6QeRUzLADynhJcBMF1nW-EIzi5PwPeCXiEvWOhDyazwE1s9zI3Zmao7L1JF07yhKhO3X8Imo0sQAabYZbpFbJapN2xVzwQhgIK1Oi1DYkbbCPc-VdTlp3ggNUjzVvSl7gxpKfK0wqKlGhx5ddmYjjcEgmf3N65eHwCxxH-5YH2LtwtqVdg7OaaysQQAfXJK4Sf7NUT19bZDHRx_z0z9ofgmbgbdjMqeuCwoY3TiraUVIIRb9yS2QCMBkdJVt1F7rrYpV3TPJAK_p7IGAWFHbMEB0z5ex-KMXBsJRuJgyaXgOE4v_JXluqoMH0Fk65GZDiWuW9cFr1U5FbTWYY1MdLykBHRRyho2spyPNzt1T3rVG_ceR__2kVUrKHnqdvyt7RxXI9CN8pWmPTxjVdS5nSEEtE_3NZpjBwSi12Cnb3Gisydrb8s7JpOCmQc_W3d4wjvaIGHH0Z1CNhlZzGXQvOs_YCzPt-uRvy8hem_ol7wIP5tj_jKiQgcguPhtqHdWlZgjSWfyGTCDopk5GmJJW88vxSdI0vi4QzAXXsx2143XGGMj6JP1n7waCFth-K2XFSOgUNkop2sdEo74Tbhdd5CuI3B_-SM8iaSrHQV3Y2DaKu4hTNvkp3sXEkziT9KK_yZyFeyTyLOwEAJLbNOvswoNhGHLELV7Ox6MyUy8R1OrjhxTS_4yHrWjqxcwZ2d46A_OP0zf2IY',
        quantity: 0,
        category: 'Внедорожники'
    },

    {
        id: 2,
        title: 'Товар 2',
        price: 200,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://i.pinimg.com/736x/54/35/9c/54359c8ba4e5361823924c13b4e7f4f2.jpg',
        quantity: 7,
        category: 'Спорткары'
    },
    {
        id: 3,
        title: 'Товар 3',
        price: 300,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://avatars.mds.yandex.net/i?id=76e9f7ec58073c9955ee91b4d0a3bed9_l-10350650-images-thumbs&n=13',
        quantity: 1,
        category: 'Электромобили'
    },
    {
        id: 4,
        title: 'Товар 4',
        price: 400,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://avatars.mds.yandex.net/i?id=3b81c9ddf2f242785005fc8f6194990f_l-4747135-images-thumbs&n=13',
        quantity: 1,
        category: 'Внедорожники'
    },

    {
        id: 5,
        title: 'Товар 5',
        price: 500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://avatars.mds.yandex.net/i?id=ef414c1d666f8b5a354145e3c2963c19_l-4592776-images-thumbs&n=13',
        quantity: 2,
        category: 'Спорткары'
    },
    {
        id: 6,
        title: 'Товар 6',
        price: 600,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://img.joomcdn.net/71ad6a2d701aec26265cefea2b1abb1179359167_original.jpeg',
        quantity: 5,
        category: 'Электромобили'
    }
    
];

export function ProductPage() {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));
    
    const [isModalOpen, setModalOpen] = useState(false);

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    const handleOrderClick = () => {
        setModalOpen(true);
    };

    return (
        <div className={s.Productda}>
            <img className={s.ProductImage} src={product.image} alt={product.title} />
            <div className={s.Producttext}>
                <h1 className={s.ProductTitle}>{product.title}</h1>
                <p className={s.ProductDesc}>{product.description}</p>
                <div className={s.btnopis}>
                    <h3 className={s.ProductTsena}>{product.price}₽</h3>
                    {product.quantity === 0 ? (
                        <button onClick={handleOrderClick} className={s.AddKorzin}>Заказать</button>
                    ) : (
                        <button className={s.AddKorzin}>Добавить в корзину</button>
                    )}
                </div>
            </div>
            <OrderFormModal   
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)} 
                product={product} 
            />
        </div>
    );
}