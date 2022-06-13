// Needed to correct work jquery + parcel bundler
import jquery from "jquery";

export default (window.$ = window.jQuery = jquery);