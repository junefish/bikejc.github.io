import React from "react";

export default function Banner({ src }: { src: string }) {
    return (
        <section className="l-header-region row">
            <div className="large-12 columns">
                <section className="block block-views page-header-banner block-views-page-header-image-view-block header">
                    <div className="view view-page-header-image-view view-id-page_header_image_view view-display-id-block">
                        <div className="view-content">
                            <div className="views-row views-row-1 views-row-odd views-row-first views-row-last">
                                <div className="views-field views-field-field-page-header-image">
                                    <div className="field-content">
                                        <img alt="" height="200" src={src} typeof="foaf:Image" width="1000"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
