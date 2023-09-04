import React from 'react'


type WebsitProp = {
    linkNo: string;
    remove: string;
    platform: string;
    option: string;
    links: string;
    url: string;
}

export default function WebsiteLinks( {linkNo, remove, platform, option, links, url} : WebsitProp) {
  return (
    <div className="container mt-5 bg-light">
                <div className="row">
                    <div className="col-6">{linkNo}</div>
                    <div className="col-6 d-flex justify-content-end">{remove}</div>
                </div>

                <div className="row mt-2">
                    <div className="col-12">
                        <label htmlFor="">{platform}</label>
                        <select name="" id="" className='form-control'>
                            <option value="">{option}</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-12">
                        <label htmlFor="">{links}</label>
                        <a className='form-control' href="">{url}</a>
                    </div>
                </div>
            </div>
  )
}
