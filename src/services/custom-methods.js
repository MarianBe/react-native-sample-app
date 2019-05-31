import axios from "axios"
import DeviceInfo from "react-native-device-info"
import I18n from "react-native-i18n"
import moment from "moment"
import { showMessage } from "react-native-flash-message"
import _ from "lodash"

function successToast(description = I18n.t("messages.dataSaved")) {
  showMessage({
    message: I18n.t("toasts.success"),
    description,
    icon: "auto",
    type: "success",
    duration: 5000
  })
}

export default {
  successToast
}
