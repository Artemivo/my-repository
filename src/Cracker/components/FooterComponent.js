import React from 'react'

function FooterComponent() {
    return (
        <div>
                            <ul className="footer-block_contacts">
                    <li className="footer-block_contacts-item">
                        <h3 className="contact-item_phone-title">PHONE</h3>
                        <p className="contact-item_phone-text">+43 ( 987 ) 345 - 6782</p>
                    </li>
                    <li className="footer-block_contacts-item">
                        <h3 className="contact-item_address-title">ADDRESS</h3>
                        <p className="contact-item_address-text">Cracker Inc. 10 Cloverfield Lane Berlin, IL 10928 Germany</p>
                    </li>
                    <li className="footer-block_contacts-item">
                        <h3 className="contact-item_share">SHARE US</h3>
                        <ul className="contact-item_share-list">
                            <li className="contact-item_share-list_item contact-list-icon_pinters"><a className="contact-item_share-list_link" href="https://www.pinterest.com/">https://www.pinterest.com/</a></li>
                            <li className="contact-item_share-list_item contact-list-icon_facebook"><a className="contact-item_share-list_link" href="https://www.facebook.com/">https://www.facebook.com/</a></li>
                            <li className="contact-item_share-list_item contact-list-google"><a className="contact-item_share-list_link" href="https://www.google.com/">https://www.google.com/</a></li>
                        </ul>
                    </li>
                </ul>
        </div>
    )
}

export default FooterComponent
