import React from 'react';
import '../../css/style.css';

Footer.propTypes = {

};

function Footer(props) {
    return (
        <div>
            <div className="footer-top-first">
                <div className="container py-md-5 py-sm-4 py-3">
                    <h2 className="footer-top-head-w3l font-weight-bold mb-2">VTO :</h2>
                    <p className="footer-main mb-4">
                        Nếu bạn đang cân nhắc một chiếc máy tính xách tay mới, đang tìm kiếm một cấu hình PC mạnh mẽ hoặc mua một chiếc VGA mới, chúng tôi sẽ giúp bạn dễ dàng tìm thấy chính xác thứ bạn cần với mức giá bạn có thể mua được.</p>
                    <div className="row w3l-grids-footer border-top border-bottom py-sm-4 py-3">
                        <div className="col-md-4 offer-footer">
                            <div className="row">
                                <div className="col-4 icon-fot">
                                    <i className="fas fa-dolly" />
                                </div>
                                <div className="col-8 text-form-footer">
                                    <h3>Miễn phí ship</h3>
                                    <p>Đơn hàng trên 300.000 đồng</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 offer-footer my-md-0 my-4">
                            <div className="row">
                                <div className="col-4 icon-fot">
                                    <i className="fas fa-shipping-fast" />
                                </div>
                                <div className="col-8 text-form-footer">
                                    <h3>Vận chuyển nhanh chóng</h3>
                                    <p>Toàn quốc</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 offer-footer">
                            <div className="row">
                                <div className="col-4 icon-fot">
                                    <i className="far fa-thumbs-up" />
                                </div>
                                <div className="col-8 text-form-footer">
                                    <h3>Lựa chọn tốt</h3>
                                    <p>của mọi sản phẩm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right py-3">
                <div className="container">
                    <p className="text-center text-white">Công Ty Cổ Phần Thương Mại - Địa chỉ: C204R, Đại học FPT, Thạch Thất, Hòa Lạc, Thành Phố Hà Nội, Việt Nam.
                        | Design by
                        <a href="http://w3layouts.com"> VTO.</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;