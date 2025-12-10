// src/components/Alert/Alert.tsx
import clsx from "clsx";

// src/components/Alert/Alert.module.scss
var Alert_module_default = {
  "alert": "_alert_81g8w_1",
  "info": "_info_81g8w_11",
  "accent": "_accent_81g8w_16",
  "warning": "_warning_81g8w_21",
  "success": "_success_81g8w_26",
  "danger": "_danger_81g8w_31",
  "alertHeader": "_alertHeader_81g8w_37",
  "alertBody": "_alertBody_81g8w_43"
};

// src/components/Alert/Alert.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Alert({ title, variant = "info", children }) {
  return /* @__PURE__ */ jsxs("div", { className: clsx(Alert_module_default.alert, Alert_module_default[variant]), children: [
    title && /* @__PURE__ */ jsx("div", { className: Alert_module_default.alertHeader, children: title }),
    children && /* @__PURE__ */ jsx("div", { className: Alert_module_default.alertBody, children })
  ] });
}

// src/components/Badge/Badge.tsx
import clsx2 from "clsx";

// src/components/Badge/Badge.module.scss
var Badge_module_default = {
  "badge": "_badge_yf3no_1",
  "accent": "_accent_yf3no_13",
  "default": "_default_yf3no_18",
  "info": "_info_yf3no_23",
  "warning": "_warning_yf3no_28",
  "success": "_success_yf3no_33"
};

// src/components/Badge/Badge.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Badge({
  variant = "default",
  className = "",
  children
}) {
  return /* @__PURE__ */ jsx2("div", { className: clsx2(Badge_module_default.badge, Badge_module_default[variant], className), children });
}

// src/components/Button/Button.tsx
import { forwardRef } from "react";
import clsx3 from "clsx";

// src/components/Button/Button.module.scss
var Button_module_default = {
  "link": "_link_1oav9_1",
  "button": "_button_1oav9_2",
  "basic": "_basic_1oav9_22",
  "accent": "_accent_1oav9_22",
  "danger": "_danger_1oav9_22",
  "disabled": "_disabled_1oav9_36"
};

// src/components/Button/Button.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Button = forwardRef(
  ({
    link,
    title,
    action,
    disabled,
    children,
    className,
    type = "button",
    variant
  }, ref) => {
    const content = children || title;
    const baseClass = link ? Button_module_default.link : Button_module_default.button;
    const variantClass = variant ? Button_module_default[variant] : "";
    const classList = clsx3(
      baseClass,
      variantClass,
      disabled && Button_module_default.disabled,
      className
    );
    if (!link && !action) {
      return /* @__PURE__ */ jsx3("div", { ref, className, children: content });
    }
    if (link && typeof link === "string") {
      return /* @__PURE__ */ jsx3(
        "a",
        {
          ref,
          href: link,
          title,
          className: classList,
          tabIndex: disabled ? -1 : 0,
          onClick: disabled ? (e) => e.preventDefault() : void 0,
          children: content
        }
      );
    }
    return /* @__PURE__ */ jsx3(
      "button",
      {
        ref,
        type,
        title,
        onClick: action,
        disabled,
        className: classList,
        children: content
      }
    );
  }
);

// src/components/Card/Card.tsx
import clsx4 from "clsx";

// src/components/Card/Card.module.scss
var Card_module_default = {
  "card": "_card_1amke_1",
  "cardHeader": "_cardHeader_1amke_10",
  "cardBody": "_cardBody_1amke_19",
  "cardFooter": "_cardFooter_1amke_27"
};

// src/components/Card/Card.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function Card({ className = "", children }) {
  return /* @__PURE__ */ jsx4("div", { className: clsx4(Card_module_default.card, className), children });
}
function CardHeader({ className = "", children }) {
  return /* @__PURE__ */ jsx4("div", { className: clsx4(Card_module_default.cardHeader, className), children });
}
function CardBody({ className = "", children }) {
  return /* @__PURE__ */ jsx4("div", { className: clsx4(Card_module_default.cardBody, className), children });
}
function CardFooter({ className = "", children }) {
  return /* @__PURE__ */ jsx4("div", { className: clsx4(Card_module_default.cardFooter, className), children });
}

// src/components/Form/Date.tsx
import { useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx5 from "clsx";

// src/components/Form/Date.module.scss
var Date_module_default = {
  "datePickerWrapper": "_datePickerWrapper_1py59_1",
  "datePickerContainer": "_datePickerContainer_1py59_8",
  "datePickerInput": "_datePickerInput_1py59_12",
  "calendarIcon": "_calendarIcon_1py59_49",
  "datePickerTrigger": "_datePickerTrigger_1py59_55",
  "focused": "_focused_1py59_68",
  "calendarWrapper": "_calendarWrapper_1py59_78",
  "modal-enter": "_modal-enter_1py59_1"
};

// src/components/Form/Date.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function InputDate({
  selected,
  onChange,
  onBlur,
  placeholder = "Select date",
  dateFormat = "yyyy-MM-dd",
  minDate,
  maxDate,
  disabled = false,
  className,
  title
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wasOpenRef = useRef(false);
  const triggerButtonRef = useRef(null);
  const handleChange = (date) => {
    onChange(date);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleKey = (e) => {
      e.key === "Escape" && setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);
  useEffect(() => {
    if (!isOpen) {
      if (wasOpenRef.current) {
        const triggerButton = triggerButtonRef?.current;
        setTimeout(() => triggerButton?.focus());
      }
      wasOpenRef.current = false;
      return;
    }
    wasOpenRef.current = true;
    const selectedDay = document.querySelector(
      ".react-datepicker__day--selected"
    );
    const todayDay = document.querySelector(
      ".react-datepicker__day--today"
    );
    selectedDay?.focus() || todayDay?.focus();
  }, [isOpen]);
  return /* @__PURE__ */ jsxs2("div", { className: clsx5(Date_module_default.datePickerWrapper, className), children: [
    /* @__PURE__ */ jsx5(
      ReactDatePicker,
      {
        selected,
        onChange: handleChange,
        dateFormat,
        placeholderText: placeholder,
        minDate,
        maxDate,
        disabled,
        className: Date_module_default.datePickerInput,
        wrapperClassName: Date_module_default.datePickerContainer,
        calendarClassName: Date_module_default.calendar,
        title,
        open: isOpen,
        onClickOutside: () => setIsOpen(false),
        onCalendarClose: () => setIsOpen(false)
      }
    ),
    /* @__PURE__ */ jsxs2(
      Button,
      {
        type: "button",
        ref: triggerButtonRef,
        action: () => setIsOpen(true),
        className: clsx5(Date_module_default.datePickerTrigger, isOpen ? Date_module_default.focused : ""),
        children: [
          /* @__PURE__ */ jsx5("span", { className: "hide", children: title }),
          /* @__PURE__ */ jsx5(
            FontAwesomeIcon,
            {
              icon: faCalendar,
              className: Date_module_default.calendarIcon,
              "aria-hidden": true
            }
          )
        ]
      }
    )
  ] });
}

// src/components/Form/Number.tsx
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FontAwesomeIcon2 } from "@fortawesome/react-fontawesome";
import clsx6 from "clsx";

// src/components/Form/Number.module.scss
var Number_module_default = {
  "wrapper": "_wrapper_1hspe_1",
  "disabled": "_disabled_1hspe_7",
  "label": "_label_1hspe_12",
  "inputWrapper": "_inputWrapper_1hspe_17",
  "input": "_input_1hspe_17",
  "nav": "_nav_1hspe_67",
  "button": "_button_1hspe_84"
};

// src/components/Form/Number.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
function InputNumber({
  value,
  onChange,
  min,
  max,
  step = 1,
  disabled = false,
  label,
  className,
  inputClassName,
  labelClassName,
  placeholder,
  incrementLabel = "Increment",
  decrementLabel = "Decrement"
}) {
  const handleIncrement = () => {
    if (disabled) return;
    const currentValue = value ?? 0;
    const newValue = currentValue + step;
    if (max === void 0 || newValue <= max) {
      onChange?.(newValue);
    }
  };
  const handleDecrement = () => {
    if (disabled) return;
    const currentValue = value ?? 0;
    const newValue = currentValue - step;
    if (min === void 0 || newValue >= min) {
      onChange?.(newValue);
    }
  };
  return /* @__PURE__ */ jsxs3(
    "label",
    {
      className: clsx6(Number_module_default.wrapper, className, {
        [Number_module_default.disabled]: disabled
      }),
      children: [
        label && /* @__PURE__ */ jsx6("span", { className: clsx6(Number_module_default.label, labelClassName), children: label }),
        /* @__PURE__ */ jsxs3("div", { className: Number_module_default.inputWrapper, children: [
          /* @__PURE__ */ jsx6(
            "input",
            {
              type: "number",
              value: value ?? "",
              onChange: (e) => onChange?.(Number(e.target.value)),
              min,
              max,
              step,
              disabled,
              placeholder,
              className: clsx6(Number_module_default.input, inputClassName)
            }
          ),
          /* @__PURE__ */ jsxs3("div", { className: Number_module_default.nav, children: [
            /* @__PURE__ */ jsx6(
              Button,
              {
                type: "button",
                className: clsx6(Number_module_default.button, Number_module_default.increment),
                action: handleIncrement,
                disabled: disabled || max !== void 0 && value !== void 0 && value >= max,
                title: incrementLabel,
                children: /* @__PURE__ */ jsx6(FontAwesomeIcon2, { icon: faChevronUp })
              }
            ),
            /* @__PURE__ */ jsx6(
              Button,
              {
                type: "button",
                className: clsx6(Number_module_default.button, Number_module_default.decrement),
                action: handleDecrement,
                disabled: disabled || min !== void 0 && value !== void 0 && value <= min,
                title: decrementLabel,
                children: /* @__PURE__ */ jsx6(FontAwesomeIcon2, { icon: faChevronDown })
              }
            )
          ] })
        ] })
      ]
    }
  );
}

// src/components/Form/Checkbox.tsx
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FontAwesomeIcon3 } from "@fortawesome/react-fontawesome";
import clsx7 from "clsx";

// src/components/Form/Checkbox.module.scss
var Checkbox_module_default = {
  "checkboxWrapper": "_checkboxWrapper_hcdv0_1",
  "disabled": "_disabled_hcdv0_8",
  "checkbox": "_checkbox_hcdv0_1",
  "checkIcon": "_checkIcon_hcdv0_24",
  "label": "_label_hcdv0_29"
};

// src/components/Form/Checkbox.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
function Checkbox({
  checked,
  onChange,
  label,
  disabled = false,
  className,
  labelClassName
}) {
  const borderColor = `var(--color-${checked ? "accent-2" : "grey-3"})`;
  const bgColor = `var(--color-${checked ? "accent-2" : "white"})`;
  return /* @__PURE__ */ jsxs4(
    "label",
    {
      className: clsx7(Checkbox_module_default.checkboxWrapper, className, {
        [Checkbox_module_default.disabled]: disabled
      }),
      children: [
        /* @__PURE__ */ jsx7(
          "span",
          {
            role: "checkbox",
            "aria-checked": checked,
            tabIndex: disabled ? -1 : 0,
            onClick: () => !disabled && onChange(!checked),
            onKeyDown: (e) => {
              if ([" ", "Enter"].includes(e.key)) {
                e.preventDefault();
                if (!disabled) onChange(!checked);
              }
            },
            className: Checkbox_module_default.checkbox,
            style: {
              backgroundColor: bgColor,
              borderColor,
              cursor: disabled ? "not-allowed" : "pointer",
              borderWidth: ".2rem"
            },
            children: checked && /* @__PURE__ */ jsx7(FontAwesomeIcon3, { icon: faCheck, className: Checkbox_module_default.checkIcon })
          }
        ),
        label && /* @__PURE__ */ jsx7("span", { className: clsx7(Checkbox_module_default.label, labelClassName), children: label })
      ]
    }
  );
}

// src/components/Grid/Grid.tsx
import clsx8 from "clsx";

// src/components/Grid/Grid.module.scss
var Grid_module_default = {
  "grid": "_grid_3uur2_1",
  "grid--1": "_grid--1_3uur2_7",
  "grid--2": "_grid--2_3uur2_11",
  "grid--3": "_grid--3_3uur2_15",
  "grid--4": "_grid--4_3uur2_19",
  "grid--5": "_grid--5_3uur2_23",
  "grid--6": "_grid--6_3uur2_27",
  "grid--7": "_grid--7_3uur2_31",
  "grid--8": "_grid--8_3uur2_35",
  "grid--9": "_grid--9_3uur2_39",
  "grid--10": "_grid--10_3uur2_43",
  "grid--11": "_grid--11_3uur2_47",
  "grid--12": "_grid--12_3uur2_51",
  "grid--xs-1": "_grid--xs-1_3uur2_56",
  "grid--xs-2": "_grid--xs-2_3uur2_59",
  "grid--xs-3": "_grid--xs-3_3uur2_62",
  "grid--xs-4": "_grid--xs-4_3uur2_65",
  "grid--xs-5": "_grid--xs-5_3uur2_68",
  "grid--xs-6": "_grid--xs-6_3uur2_71",
  "grid--xs-7": "_grid--xs-7_3uur2_74",
  "grid--xs-8": "_grid--xs-8_3uur2_77",
  "grid--xs-9": "_grid--xs-9_3uur2_80",
  "grid--xs-10": "_grid--xs-10_3uur2_83",
  "grid--xs-11": "_grid--xs-11_3uur2_86",
  "grid--xs-12": "_grid--xs-12_3uur2_89",
  "grid--sm-1": "_grid--sm-1_3uur2_94",
  "grid--sm-2": "_grid--sm-2_3uur2_97",
  "grid--sm-3": "_grid--sm-3_3uur2_100",
  "grid--sm-4": "_grid--sm-4_3uur2_103",
  "grid--sm-5": "_grid--sm-5_3uur2_106",
  "grid--sm-6": "_grid--sm-6_3uur2_109",
  "grid--sm-7": "_grid--sm-7_3uur2_112",
  "grid--sm-8": "_grid--sm-8_3uur2_115",
  "grid--sm-9": "_grid--sm-9_3uur2_118",
  "grid--sm-10": "_grid--sm-10_3uur2_121",
  "grid--sm-11": "_grid--sm-11_3uur2_124",
  "grid--sm-12": "_grid--sm-12_3uur2_127",
  "grid--md-1": "_grid--md-1_3uur2_132",
  "grid--md-2": "_grid--md-2_3uur2_135",
  "grid--md-3": "_grid--md-3_3uur2_138",
  "grid--md-4": "_grid--md-4_3uur2_141",
  "grid--md-5": "_grid--md-5_3uur2_144",
  "grid--md-6": "_grid--md-6_3uur2_147",
  "grid--md-7": "_grid--md-7_3uur2_150",
  "grid--md-8": "_grid--md-8_3uur2_153",
  "grid--md-9": "_grid--md-9_3uur2_156",
  "grid--md-10": "_grid--md-10_3uur2_159",
  "grid--md-11": "_grid--md-11_3uur2_162",
  "grid--md-12": "_grid--md-12_3uur2_165",
  "grid--lg-1": "_grid--lg-1_3uur2_170",
  "grid--lg-2": "_grid--lg-2_3uur2_173",
  "grid--lg-3": "_grid--lg-3_3uur2_176",
  "grid--lg-4": "_grid--lg-4_3uur2_179",
  "grid--lg-5": "_grid--lg-5_3uur2_182",
  "grid--lg-6": "_grid--lg-6_3uur2_185",
  "grid--lg-7": "_grid--lg-7_3uur2_188",
  "grid--lg-8": "_grid--lg-8_3uur2_191",
  "grid--lg-9": "_grid--lg-9_3uur2_194",
  "grid--lg-10": "_grid--lg-10_3uur2_197",
  "grid--lg-11": "_grid--lg-11_3uur2_200",
  "grid--lg-12": "_grid--lg-12_3uur2_203",
  "grid--xl-1": "_grid--xl-1_3uur2_208",
  "grid--xl-2": "_grid--xl-2_3uur2_211",
  "grid--xl-3": "_grid--xl-3_3uur2_214",
  "grid--xl-4": "_grid--xl-4_3uur2_217",
  "grid--xl-5": "_grid--xl-5_3uur2_220",
  "grid--xl-6": "_grid--xl-6_3uur2_223",
  "grid--xl-7": "_grid--xl-7_3uur2_226",
  "grid--xl-8": "_grid--xl-8_3uur2_229",
  "grid--xl-9": "_grid--xl-9_3uur2_232",
  "grid--xl-10": "_grid--xl-10_3uur2_235",
  "grid--xl-11": "_grid--xl-11_3uur2_238",
  "grid--xl-12": "_grid--xl-12_3uur2_241",
  "grid--gap-none": "_grid--gap-none_3uur2_245",
  "grid--gap-xs": "_grid--gap-xs_3uur2_249",
  "grid--gap-sm": "_grid--gap-sm_3uur2_253",
  "grid--gap-md": "_grid--gap-md_3uur2_257",
  "grid--gap-lg": "_grid--gap-lg_3uur2_261",
  "grid--gap-xl": "_grid--gap-xl_3uur2_265",
  "grid--gap-xs-none": "_grid--gap-xs-none_3uur2_270",
  "grid--gap-xs-xs": "_grid--gap-xs-xs_3uur2_273",
  "grid--gap-xs-sm": "_grid--gap-xs-sm_3uur2_276",
  "grid--gap-xs-md": "_grid--gap-xs-md_3uur2_279",
  "grid--gap-xs-lg": "_grid--gap-xs-lg_3uur2_282",
  "grid--gap-xs-xl": "_grid--gap-xs-xl_3uur2_285",
  "grid--gap-sm-none": "_grid--gap-sm-none_3uur2_290",
  "grid--gap-sm-xs": "_grid--gap-sm-xs_3uur2_293",
  "grid--gap-sm-sm": "_grid--gap-sm-sm_3uur2_296",
  "grid--gap-sm-md": "_grid--gap-sm-md_3uur2_299",
  "grid--gap-sm-lg": "_grid--gap-sm-lg_3uur2_302",
  "grid--gap-sm-xl": "_grid--gap-sm-xl_3uur2_305",
  "grid--gap-md-none": "_grid--gap-md-none_3uur2_310",
  "grid--gap-md-xs": "_grid--gap-md-xs_3uur2_313",
  "grid--gap-md-sm": "_grid--gap-md-sm_3uur2_316",
  "grid--gap-md-md": "_grid--gap-md-md_3uur2_319",
  "grid--gap-md-lg": "_grid--gap-md-lg_3uur2_322",
  "grid--gap-md-xl": "_grid--gap-md-xl_3uur2_325",
  "grid--gap-lg-none": "_grid--gap-lg-none_3uur2_330",
  "grid--gap-lg-xs": "_grid--gap-lg-xs_3uur2_333",
  "grid--gap-lg-sm": "_grid--gap-lg-sm_3uur2_336",
  "grid--gap-lg-md": "_grid--gap-lg-md_3uur2_339",
  "grid--gap-lg-lg": "_grid--gap-lg-lg_3uur2_342",
  "grid--gap-lg-xl": "_grid--gap-lg-xl_3uur2_345",
  "grid--gap-xl-none": "_grid--gap-xl-none_3uur2_350",
  "grid--gap-xl-xs": "_grid--gap-xl-xs_3uur2_353",
  "grid--gap-xl-sm": "_grid--gap-xl-sm_3uur2_356",
  "grid--gap-xl-md": "_grid--gap-xl-md_3uur2_359",
  "grid--gap-xl-lg": "_grid--gap-xl-lg_3uur2_362",
  "grid--gap-xl-xl": "_grid--gap-xl-xl_3uur2_365",
  "gridItem": "_gridItem_3uur2_369",
  "gridItem-1": "_gridItem-1_3uur2_373",
  "gridItem-2": "_gridItem-2_3uur2_377",
  "gridItem-3": "_gridItem-3_3uur2_381",
  "gridItem-4": "_gridItem-4_3uur2_385",
  "gridItem-5": "_gridItem-5_3uur2_389",
  "gridItem-6": "_gridItem-6_3uur2_393",
  "gridItem-7": "_gridItem-7_3uur2_397",
  "gridItem-8": "_gridItem-8_3uur2_401",
  "gridItem-9": "_gridItem-9_3uur2_405",
  "gridItem-10": "_gridItem-10_3uur2_409",
  "gridItem-11": "_gridItem-11_3uur2_413",
  "gridItem-12": "_gridItem-12_3uur2_417",
  "gridItem--xs-1": "_gridItem--xs-1_3uur2_422",
  "gridItem--xs-2": "_gridItem--xs-2_3uur2_425",
  "gridItem--xs-3": "_gridItem--xs-3_3uur2_428",
  "gridItem--xs-4": "_gridItem--xs-4_3uur2_431",
  "gridItem--xs-5": "_gridItem--xs-5_3uur2_434",
  "gridItem--xs-6": "_gridItem--xs-6_3uur2_437",
  "gridItem--xs-7": "_gridItem--xs-7_3uur2_440",
  "gridItem--xs-8": "_gridItem--xs-8_3uur2_443",
  "gridItem--xs-9": "_gridItem--xs-9_3uur2_446",
  "gridItem--xs-10": "_gridItem--xs-10_3uur2_449",
  "gridItem--xs-11": "_gridItem--xs-11_3uur2_452",
  "gridItem--xs-12": "_gridItem--xs-12_3uur2_455",
  "gridItem--sm-1": "_gridItem--sm-1_3uur2_460",
  "gridItem--sm-2": "_gridItem--sm-2_3uur2_463",
  "gridItem--sm-3": "_gridItem--sm-3_3uur2_466",
  "gridItem--sm-4": "_gridItem--sm-4_3uur2_469",
  "gridItem--sm-5": "_gridItem--sm-5_3uur2_472",
  "gridItem--sm-6": "_gridItem--sm-6_3uur2_475",
  "gridItem--sm-7": "_gridItem--sm-7_3uur2_478",
  "gridItem--sm-8": "_gridItem--sm-8_3uur2_481",
  "gridItem--sm-9": "_gridItem--sm-9_3uur2_484",
  "gridItem--sm-10": "_gridItem--sm-10_3uur2_487",
  "gridItem--sm-11": "_gridItem--sm-11_3uur2_490",
  "gridItem--sm-12": "_gridItem--sm-12_3uur2_493",
  "gridItem--md-1": "_gridItem--md-1_3uur2_498",
  "gridItem--md-2": "_gridItem--md-2_3uur2_501",
  "gridItem--md-3": "_gridItem--md-3_3uur2_504",
  "gridItem--md-4": "_gridItem--md-4_3uur2_507",
  "gridItem--md-5": "_gridItem--md-5_3uur2_510",
  "gridItem--md-6": "_gridItem--md-6_3uur2_513",
  "gridItem--md-7": "_gridItem--md-7_3uur2_516",
  "gridItem--md-8": "_gridItem--md-8_3uur2_519",
  "gridItem--md-9": "_gridItem--md-9_3uur2_522",
  "gridItem--md-10": "_gridItem--md-10_3uur2_525",
  "gridItem--md-11": "_gridItem--md-11_3uur2_528",
  "gridItem--md-12": "_gridItem--md-12_3uur2_531",
  "gridItem--lg-1": "_gridItem--lg-1_3uur2_536",
  "gridItem--lg-2": "_gridItem--lg-2_3uur2_539",
  "gridItem--lg-3": "_gridItem--lg-3_3uur2_542",
  "gridItem--lg-4": "_gridItem--lg-4_3uur2_545",
  "gridItem--lg-5": "_gridItem--lg-5_3uur2_548",
  "gridItem--lg-6": "_gridItem--lg-6_3uur2_551",
  "gridItem--lg-7": "_gridItem--lg-7_3uur2_554",
  "gridItem--lg-8": "_gridItem--lg-8_3uur2_557",
  "gridItem--lg-9": "_gridItem--lg-9_3uur2_560",
  "gridItem--lg-10": "_gridItem--lg-10_3uur2_563",
  "gridItem--lg-11": "_gridItem--lg-11_3uur2_566",
  "gridItem--lg-12": "_gridItem--lg-12_3uur2_569",
  "gridItem--xl-1": "_gridItem--xl-1_3uur2_574",
  "gridItem--xl-2": "_gridItem--xl-2_3uur2_577",
  "gridItem--xl-3": "_gridItem--xl-3_3uur2_580",
  "gridItem--xl-4": "_gridItem--xl-4_3uur2_583",
  "gridItem--xl-5": "_gridItem--xl-5_3uur2_586",
  "gridItem--xl-6": "_gridItem--xl-6_3uur2_589",
  "gridItem--xl-7": "_gridItem--xl-7_3uur2_592",
  "gridItem--xl-8": "_gridItem--xl-8_3uur2_595",
  "gridItem--xl-9": "_gridItem--xl-9_3uur2_598",
  "gridItem--xl-10": "_gridItem--xl-10_3uur2_601",
  "gridItem--xl-11": "_gridItem--xl-11_3uur2_604",
  "gridItem--xl-12": "_gridItem--xl-12_3uur2_607",
  "gridItem--row-1": "_gridItem--row-1_3uur2_611",
  "gridItem--row-2": "_gridItem--row-2_3uur2_618",
  "gridItem--row-3": "_gridItem--row-3_3uur2_625",
  "gridItem--row-4": "_gridItem--row-4_3uur2_632",
  "gridItem--row-5": "_gridItem--row-5_3uur2_639",
  "gridItem--row-6": "_gridItem--row-6_3uur2_646",
  "gridItem--row-xs-1": "_gridItem--row-xs-1_3uur2_654",
  "gridItem--row-xs-2": "_gridItem--row-xs-2_3uur2_660",
  "gridItem--row-xs-3": "_gridItem--row-xs-3_3uur2_666",
  "gridItem--row-xs-4": "_gridItem--row-xs-4_3uur2_672",
  "gridItem--row-xs-5": "_gridItem--row-xs-5_3uur2_678",
  "gridItem--row-xs-6": "_gridItem--row-xs-6_3uur2_684",
  "gridItem--row-sm-1": "_gridItem--row-sm-1_3uur2_692",
  "gridItem--row-sm-2": "_gridItem--row-sm-2_3uur2_698",
  "gridItem--row-sm-3": "_gridItem--row-sm-3_3uur2_704",
  "gridItem--row-sm-4": "_gridItem--row-sm-4_3uur2_710",
  "gridItem--row-sm-5": "_gridItem--row-sm-5_3uur2_716",
  "gridItem--row-sm-6": "_gridItem--row-sm-6_3uur2_722",
  "gridItem--row-md-1": "_gridItem--row-md-1_3uur2_730",
  "gridItem--row-md-2": "_gridItem--row-md-2_3uur2_736",
  "gridItem--row-md-3": "_gridItem--row-md-3_3uur2_742",
  "gridItem--row-md-4": "_gridItem--row-md-4_3uur2_748",
  "gridItem--row-md-5": "_gridItem--row-md-5_3uur2_754",
  "gridItem--row-md-6": "_gridItem--row-md-6_3uur2_760",
  "gridItem--row-lg-1": "_gridItem--row-lg-1_3uur2_768",
  "gridItem--row-lg-2": "_gridItem--row-lg-2_3uur2_774",
  "gridItem--row-lg-3": "_gridItem--row-lg-3_3uur2_780",
  "gridItem--row-lg-4": "_gridItem--row-lg-4_3uur2_786",
  "gridItem--row-lg-5": "_gridItem--row-lg-5_3uur2_792",
  "gridItem--row-lg-6": "_gridItem--row-lg-6_3uur2_798",
  "gridItem--row-xl-1": "_gridItem--row-xl-1_3uur2_806",
  "gridItem--row-xl-2": "_gridItem--row-xl-2_3uur2_812",
  "gridItem--row-xl-3": "_gridItem--row-xl-3_3uur2_818",
  "gridItem--row-xl-4": "_gridItem--row-xl-4_3uur2_824",
  "gridItem--row-xl-5": "_gridItem--row-xl-5_3uur2_830",
  "gridItem--row-xl-6": "_gridItem--row-xl-6_3uur2_836"
};

// src/components/Grid/Grid.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
function Grid({
  children,
  gap,
  gapXS,
  gapSM,
  gapMD,
  gapLG,
  gapXL,
  col,
  colXS,
  colSM,
  colMD,
  colLG,
  colXL,
  className,
  ...rest
}) {
  const colClasses = clsx8(
    col && Grid_module_default[`grid--${col}`],
    colXS && Grid_module_default[`grid--xs-${colXS}`],
    colSM && Grid_module_default[`grid--sm-${colSM}`],
    colMD && Grid_module_default[`grid--md-${colMD}`],
    colLG && Grid_module_default[`grid--lg-${colLG}`],
    colXL && Grid_module_default[`grid--xl-${colXL}`]
  );
  const gapClasses = clsx8(
    gap && Grid_module_default[`grid--gap-${gap}`],
    gapXS && Grid_module_default[`grid--gap-xs-${gapXS}`],
    gapSM && Grid_module_default[`grid--gap-sm-${gapSM}`],
    gapMD && Grid_module_default[`grid--gap-md-${gapMD}`],
    gapLG && Grid_module_default[`grid--gap-lg-${gapLG}`],
    gapXL && Grid_module_default[`grid--gap-xl-${gapXL}`]
  );
  const gridClasses = clsx8(Grid_module_default.grid, gapClasses, colClasses, className);
  return /* @__PURE__ */ jsx8("div", { className: gridClasses, ...rest, children });
}

// src/components/Grid/GridItem.tsx
import clsx9 from "clsx";
import { jsx as jsx9 } from "react/jsx-runtime";
function GridItem({
  children,
  col,
  colXS,
  colSM,
  colMD,
  colLG,
  colXL,
  row,
  rowXS,
  rowSM,
  rowMD,
  rowLG,
  rowXL,
  className,
  ...rest
}) {
  const colClasses = clsx9(
    col && Grid_module_default[`gridItem-${col}`],
    colXS && Grid_module_default[`gridItem--xs-${colXS}`],
    colSM && Grid_module_default[`gridItem--sm-${colSM}`],
    colMD && Grid_module_default[`gridItem--md-${colMD}`],
    colLG && Grid_module_default[`gridItem--lg-${colLG}`],
    colXL && Grid_module_default[`gridItem--xl-${colXL}`]
  );
  const rowClasses = clsx9(
    row && Grid_module_default[`gridItem--row-${row}`],
    rowXS && Grid_module_default[`gridItem--row-xs-${rowXS}`],
    rowSM && Grid_module_default[`gridItem--row-sm-${rowSM}`],
    rowMD && Grid_module_default[`gridItem--row-md-${rowMD}`],
    rowLG && Grid_module_default[`gridItem--row-lg-${rowLG}`],
    rowXL && Grid_module_default[`gridItem--row-xl-${rowXL}`]
  );
  const itemClasses = clsx9(Grid_module_default.gridItem, colClasses, rowClasses, className);
  return /* @__PURE__ */ jsx9("div", { className: itemClasses, ...rest, children });
}

// src/components/Modal/Modal.tsx
import { useEffect as useEffect2, useEffectEvent, useRef as useRef2, useState as useState2 } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FontAwesomeIcon4 } from "@fortawesome/react-fontawesome";
import clsx10 from "clsx";

// src/components/Modal/Modal.module.scss
var Modal_module_default = {
  "modals": "_modals_sfc9d_1",
  "modalBackdrop": "_modalBackdrop_sfc9d_8",
  "active": "_active_sfc9d_20",
  "removing": "_removing_sfc9d_23",
  "modal": "_modal_sfc9d_1",
  "sm": "_sm_sfc9d_51",
  "md": "_md_sfc9d_54",
  "lg": "_lg_sfc9d_57",
  "xl": "_xl_sfc9d_60",
  "full": "_full_sfc9d_63",
  "modalHeader": "_modalHeader_sfc9d_68",
  "modalBody": "_modalBody_sfc9d_80",
  "modalClose": "_modalClose_sfc9d_90"
};

// src/components/Modal/Modal.tsx
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
function Modal({
  id,
  title,
  size = "lg",
  children,
  onRemove,
  duration = Infinity,
  closeOnBackdrop = false,
  closeLabel = "Close Modal"
}) {
  const [active, setActive] = useState2(false);
  const [removing, setRemoving] = useState2(false);
  const modalRef = useRef2(null);
  const previousFocusRef = useRef2(null);
  const modalTitleId = `modal-title-${id}`;
  const handleRemove = useEffectEvent(() => {
    previousFocusRef.current?.focus();
    setRemoving(true);
    setTimeout(() => id && onRemove(id), 200);
  });
  const handleBackdropClick = (e) => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      handleRemove();
    }
  };
  useEffect2(() => {
    previousFocusRef.current = document.activeElement;
    modalRef.current?.querySelector("button")?.focus();
    const timer = setTimeout(() => setActive(true), 100);
    return () => clearTimeout(timer);
  }, [active]);
  useEffect2(() => {
    if (!active || removing) return;
    const handleFocusTrap = (e) => {
      if (e.key !== "Tab") return;
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements || focusableElements.length === 0) return;
      const focusableArray = Array.from(focusableElements);
      const lastIndex = focusableArray.length - 1;
      const currentIndex = focusableArray.findIndex(
        (el) => el === document.activeElement
      );
      e.preventDefault();
      if (e.shiftKey) {
        const prevIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1;
        focusableArray[prevIndex].focus();
      } else {
        const nextIndex = currentIndex >= lastIndex ? 0 : currentIndex + 1;
        focusableArray[nextIndex].focus();
      }
    };
    document.addEventListener("keydown", handleFocusTrap);
    return () => document.removeEventListener("keydown", handleFocusTrap);
  }, [active, removing]);
  useEffect2(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleRemove();
      }
    };
    if (active && !removing) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [active, removing]);
  useEffect2(() => {
    if (duration === Infinity) return;
    const timer = setTimeout(() => {
      handleRemove();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);
  useEffect2(() => {
    if (active && !removing) {
      const clientWidth = document.documentElement.clientWidth;
      const scrollbarWidth = window.innerWidth - clientWidth;
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        `${scrollbarWidth}px`
      );
      document.body.classList.add("freeze");
      return () => {
        document.body.classList.remove("freeze");
        document.documentElement.style.removeProperty("--scrollbar-width");
      };
    }
  }, [active, removing]);
  return /* @__PURE__ */ jsx10(
    "div",
    {
      className: clsx10(
        Modal_module_default.modalBackdrop,
        removing && Modal_module_default.removing,
        active && !removing && Modal_module_default.active
      ),
      onClick: handleBackdropClick,
      role: "presentation",
      children: /* @__PURE__ */ jsxs5(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": title ? modalTitleId : void 0,
          ref: modalRef,
          className: clsx10(
            Modal_module_default.modal,
            Modal_module_default[size],
            removing && Modal_module_default.removing,
            active && !removing && Modal_module_default.active
          ),
          onClick: (e) => e.stopPropagation(),
          children: [
            title && /* @__PURE__ */ jsx10("div", { className: Modal_module_default.modalHeader, id: modalTitleId, children: title }),
            /* @__PURE__ */ jsx10(
              Button,
              {
                action: handleRemove,
                title: closeLabel,
                "aria-label": closeLabel,
                className: Modal_module_default.modalClose,
                children: /* @__PURE__ */ jsx10(FontAwesomeIcon4, { icon: faXmark, "aria-hidden": "true" })
              }
            ),
            /* @__PURE__ */ jsx10("div", { className: Modal_module_default.modalBody, children })
          ]
        }
      )
    }
  );
}

// src/components/Modal/Modals.tsx
import { useCallback, useMemo, useState as useState3 } from "react";

// src/components/Modal/ModalsContext.tsx
import { createContext, useContext } from "react";
var ModalsContext = createContext(
  void 0
);
var useModals = () => {
  const context = useContext(ModalsContext);
  if (!context) {
    throw new Error("useModals must be used within Modals");
  }
  return context;
};

// src/components/Modal/Modals.tsx
import { jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
import { createElement } from "react";
function Modals({ children }) {
  const [modals, setModals] = useState3([]);
  const addModal = useCallback((options) => {
    setModals((prev) => [...prev, { ...options, id: Date.now() }]);
  }, []);
  const removeModal = useCallback((id) => {
    setModals((prev) => [...prev.filter((v) => id !== v.id)]);
  }, []);
  const value = useMemo(
    () => ({ modals, addModal, removeModal }),
    [modals, addModal, removeModal]
  );
  return /* @__PURE__ */ jsxs6(ModalsContext.Provider, { value, children: [
    children,
    /* @__PURE__ */ jsx11("div", { className: Modal_module_default.modals, children: modals.map((modal) => /* @__PURE__ */ createElement(Modal, { ...modal, key: modal.id, onRemove: removeModal })) })
  ] });
}

// src/components/Note/Note.tsx
import clsx11 from "clsx";

// src/components/Note/Note.module.scss
var Note_module_default = {
  "note": "_note_11ida_1",
  "default": "_default_11ida_12",
  "success": "_success_11ida_16",
  "danger": "_danger_11ida_20",
  "warning": "_warning_11ida_24",
  "noteTitle": "_noteTitle_11ida_29"
};

// src/components/Note/Note.tsx
import { jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
function Note({ title, variant = "default", children }) {
  if (!children) return null;
  return /* @__PURE__ */ jsxs7("div", { className: clsx11(Note_module_default.note, Note_module_default[variant]), children: [
    title && /* @__PURE__ */ jsx12(Title, { level: "3", className: clsx11(Note_module_default.title), children: title }),
    children
  ] });
}

// src/components/Title/Title.tsx
import clsx12 from "clsx";

// src/components/Title/Title.module.scss
var Title_module_default = {
  "title": "_title_ikigx_1",
  "h1": "_h1_ikigx_6",
  "h2": "_h2_ikigx_10",
  "h3": "_h3_ikigx_14",
  "h4": "_h4_ikigx_18",
  "h5": "_h5_ikigx_22",
  "h6": "_h6_ikigx_26"
};

// src/components/Title/Title.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
function Title({ level = "1", children, className }) {
  const Tag = `h${level}`;
  return /* @__PURE__ */ jsx13(Tag, { className: clsx12(Title_module_default.title, Title_module_default[Tag], className), children });
}

// src/components/Toast/Toast.tsx
import { useEffect as useEffect3, useEffectEvent as useEffectEvent2, useState as useState4 } from "react";
import { faXmark as faXmark2 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FontAwesomeIcon5 } from "@fortawesome/react-fontawesome";
import clsx13 from "clsx";

// src/components/Toast/Toast.module.scss
var Toast_module_default = {
  "toasts": "_toasts_1jrcn_1",
  "toast": "_toast_1jrcn_1",
  "active": "_active_1jrcn_26",
  "removing": "_removing_1jrcn_30",
  "toastClose": "_toastClose_1jrcn_35",
  "accent": "_accent_1jrcn_52",
  "info": "_info_1jrcn_55",
  "warning": "_warning_1jrcn_58",
  "success": "_success_1jrcn_61",
  "danger": "_danger_1jrcn_64"
};

// src/components/Toast/Toast.tsx
import { jsx as jsx14, jsxs as jsxs8 } from "react/jsx-runtime";
function Toast({
  id,
  title,
  children,
  variant = "accent",
  duration = 1e4,
  onRemove,
  closeLabel = "Close Toast"
}) {
  const [active, setActive] = useState4(false);
  const [removing, setRemoving] = useState4(false);
  const handleRemove = useEffectEvent2(() => {
    setRemoving(true);
    setTimeout(() => {
      id && onRemove(id);
    }, 200);
  });
  useEffect3(() => {
    const timer = setTimeout(() => setActive(true), 100);
    return () => clearTimeout(timer);
  }, []);
  useEffect3(() => {
    if (duration === Infinity) return;
    const timer = setTimeout(() => {
      handleRemove();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);
  return /* @__PURE__ */ jsxs8(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      className: clsx13(
        Toast_module_default.toast,
        removing && Toast_module_default.removing,
        active && !removing && Toast_module_default.active
      ),
      children: [
        /* @__PURE__ */ jsx14(Alert, { title, variant, children }),
        /* @__PURE__ */ jsx14(
          Button,
          {
            action: handleRemove,
            title: closeLabel,
            "aria-label": closeLabel,
            className: clsx13(Toast_module_default.toastClose, Toast_module_default[variant]),
            children: /* @__PURE__ */ jsx14(FontAwesomeIcon5, { icon: faXmark2 })
          }
        )
      ]
    }
  );
}

// src/components/Toast/Toasts.tsx
import { useCallback as useCallback2, useMemo as useMemo2, useState as useState5 } from "react";

// src/components/Toast/ToastsContext.tsx
import { createContext as createContext2, useContext as useContext2 } from "react";
var ToastsContext = createContext2(
  void 0
);
var useToasts = () => {
  const context = useContext2(ToastsContext);
  if (!context) {
    throw new Error("useToasts must be used within Toasts");
  }
  return context;
};

// src/components/Toast/Toasts.tsx
import { jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
import { createElement as createElement2 } from "react";
function Toasts({ children }) {
  const [toasts, setToasts] = useState5([]);
  const addToast = useCallback2((options) => {
    setTimeout(() => {
      setToasts((prev) => [...prev, { ...options, id: Date.now() }]);
    }, 1e3);
  }, []);
  const removeToast = useCallback2((id) => {
    setToasts((prev) => prev.filter((v) => id !== v.id));
  }, []);
  const value = useMemo2(
    () => ({ toasts, addToast, removeToast }),
    [toasts, addToast, removeToast]
  );
  return /* @__PURE__ */ jsxs9(ToastsContext.Provider, { value, children: [
    children,
    /* @__PURE__ */ jsx15("div", { className: Toast_module_default.toasts, children: toasts.map((toast) => /* @__PURE__ */ createElement2(Toast, { ...toast, key: toast.id, onRemove: removeToast })) })
  ] });
}
export {
  Alert,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Grid,
  GridItem,
  InputDate,
  InputNumber,
  Modal,
  Modals,
  Note,
  Title,
  Toast,
  Toasts,
  useModals,
  useToasts
};
//# sourceMappingURL=index.mjs.map