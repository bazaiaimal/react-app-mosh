import React from 'react'
import CustomBtn from '../components/CustomBtn'
import WebsiteLinks from '../components/WebsiteLinks';

export default function devlinks() {

    const links = [
        {
            linkNo: 'Links#1',
            remove: 'Remove',
            platform: 'Platform',
            option: 'GitHub',
            links: 'Links',
            url: 'https://github.com/'
        },
        {
            linkNo: 'Links#2',
            remove: 'Remove',
            platform: 'Platform',
            option: 'Youtube',
            links: 'Links',
            url: 'https://www.youtube.com/'
        },
        {
            linkNo: 'Links#3',
            remove: 'Remove',
            platform: 'Platform',
            option: 'CHS',
            links: 'Links',
            url: 'https://codehubsys.com/'
        },
    ]

    return (
        <div className="container mb-2">
            <div className="row bg-light d-flex justify-content-evenly my-2">
                <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">devlinks</div>
                <div className="col-3">Links</div>
                <div className="col-3"><i className="fas fa-user-alt" aria-hidden="true"></i>Profile Details</div>
                <div className="col-3 d-flex justify-content-end"><button type="button" className="btn btn-outline-primary">Preview</button></div>
            </div>

            <div className="row mt-3">
                <h2>Customize your links</h2>
                <p>Add/edit/remove links below and then share all your profiles with the word</p>
                <button type="button" className="btn btn-outline-primary">+ Add Link</button>
            </div>

            {
                links.map((link, index) =>
                    <div className="col-sm-12 col-md-12 col-lg-12 mb-5" key={index}>
                        <WebsiteLinks linkNo={link.linkNo} remove={link.remove} platform={link.platform} option={link.option} links={link.links} url={link.url} />
                    </div>
                )
            }

            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-end">
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
            </div>
        </div>

    );
}
