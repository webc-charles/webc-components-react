// src/components/Alert/Alert.tsx
import clsx from "clsx";

// src/components/Alert/Alert.module.scss
var Alert_module_default = {
  "alert": "_alert_1t1ea_1",
  "info": "_info_1t1ea_11",
  "accent": "_accent_1t1ea_16",
  "warning": "_warning_1t1ea_21",
  "success": "_success_1t1ea_26",
  "danger": "_danger_1t1ea_31",
  "alertHeader": "_alertHeader_1t1ea_37",
  "alertBody": "_alertBody_1t1ea_43"
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
  "badge": "_badge_lc6e2_1",
  "accent": "_accent_lc6e2_13",
  "default": "_default_lc6e2_18",
  "info": "_info_lc6e2_23",
  "warning": "_warning_lc6e2_28",
  "success": "_success_lc6e2_33"
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
  "link": "_link_rmk4g_1",
  "button": "_button_rmk4g_2",
  "basic": "_basic_rmk4g_22",
  "accent": "_accent_rmk4g_22",
  "danger": "_danger_rmk4g_22",
  "disabled": "_disabled_rmk4g_36"
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
    variant,
    ariaLabel
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
          "aria-label": ariaLabel,
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
        "aria-label": ariaLabel,
        children: content
      }
    );
  }
);

// src/components/Card/Card.tsx
import clsx4 from "clsx";

// src/components/Card/Card.module.scss
var Card_module_default = {
  "card": "_card_1s5al_1",
  "cardHeader": "_cardHeader_1s5al_10",
  "cardBody": "_cardBody_1s5al_19",
  "cardFooter": "_cardFooter_1s5al_27"
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
  "datePickerWrapper": "_datePickerWrapper_16j9v_1",
  "datePickerContainer": "_datePickerContainer_16j9v_8",
  "datePickerInput": "_datePickerInput_16j9v_12",
  "calendarIcon": "_calendarIcon_16j9v_49",
  "datePickerTrigger": "_datePickerTrigger_16j9v_55",
  "focused": "_focused_16j9v_68",
  "calendarWrapper": "_calendarWrapper_16j9v_78",
  "modal-enter": "_modal-enter_16j9v_1"
};

// src/components/Form/Date.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function InputDate({
  selected,
  onChange,
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
  "wrapper": "_wrapper_1y7ls_1",
  "disabled": "_disabled_1y7ls_7",
  "label": "_label_1y7ls_12",
  "inputWrapper": "_inputWrapper_1y7ls_17",
  "input": "_input_1y7ls_17",
  "nav": "_nav_1y7ls_67",
  "button": "_button_1y7ls_84"
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
  "checkboxWrapper": "_checkboxWrapper_1utob_1",
  "disabled": "_disabled_1utob_8",
  "checkbox": "_checkbox_1utob_1",
  "checkIcon": "_checkIcon_1utob_24",
  "label": "_label_1utob_29"
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
  "grid": "_grid_1733q_1",
  "grid--1": "_grid--1_1733q_7",
  "grid--2": "_grid--2_1733q_11",
  "grid--3": "_grid--3_1733q_15",
  "grid--4": "_grid--4_1733q_19",
  "grid--5": "_grid--5_1733q_23",
  "grid--6": "_grid--6_1733q_27",
  "grid--7": "_grid--7_1733q_31",
  "grid--8": "_grid--8_1733q_35",
  "grid--9": "_grid--9_1733q_39",
  "grid--10": "_grid--10_1733q_43",
  "grid--11": "_grid--11_1733q_47",
  "grid--12": "_grid--12_1733q_51",
  "grid--xs-1": "_grid--xs-1_1733q_56",
  "grid--xs-2": "_grid--xs-2_1733q_59",
  "grid--xs-3": "_grid--xs-3_1733q_62",
  "grid--xs-4": "_grid--xs-4_1733q_65",
  "grid--xs-5": "_grid--xs-5_1733q_68",
  "grid--xs-6": "_grid--xs-6_1733q_71",
  "grid--xs-7": "_grid--xs-7_1733q_74",
  "grid--xs-8": "_grid--xs-8_1733q_77",
  "grid--xs-9": "_grid--xs-9_1733q_80",
  "grid--xs-10": "_grid--xs-10_1733q_83",
  "grid--xs-11": "_grid--xs-11_1733q_86",
  "grid--xs-12": "_grid--xs-12_1733q_89",
  "grid--sm-1": "_grid--sm-1_1733q_94",
  "grid--sm-2": "_grid--sm-2_1733q_97",
  "grid--sm-3": "_grid--sm-3_1733q_100",
  "grid--sm-4": "_grid--sm-4_1733q_103",
  "grid--sm-5": "_grid--sm-5_1733q_106",
  "grid--sm-6": "_grid--sm-6_1733q_109",
  "grid--sm-7": "_grid--sm-7_1733q_112",
  "grid--sm-8": "_grid--sm-8_1733q_115",
  "grid--sm-9": "_grid--sm-9_1733q_118",
  "grid--sm-10": "_grid--sm-10_1733q_121",
  "grid--sm-11": "_grid--sm-11_1733q_124",
  "grid--sm-12": "_grid--sm-12_1733q_127",
  "grid--md-1": "_grid--md-1_1733q_132",
  "grid--md-2": "_grid--md-2_1733q_135",
  "grid--md-3": "_grid--md-3_1733q_138",
  "grid--md-4": "_grid--md-4_1733q_141",
  "grid--md-5": "_grid--md-5_1733q_144",
  "grid--md-6": "_grid--md-6_1733q_147",
  "grid--md-7": "_grid--md-7_1733q_150",
  "grid--md-8": "_grid--md-8_1733q_153",
  "grid--md-9": "_grid--md-9_1733q_156",
  "grid--md-10": "_grid--md-10_1733q_159",
  "grid--md-11": "_grid--md-11_1733q_162",
  "grid--md-12": "_grid--md-12_1733q_165",
  "grid--lg-1": "_grid--lg-1_1733q_170",
  "grid--lg-2": "_grid--lg-2_1733q_173",
  "grid--lg-3": "_grid--lg-3_1733q_176",
  "grid--lg-4": "_grid--lg-4_1733q_179",
  "grid--lg-5": "_grid--lg-5_1733q_182",
  "grid--lg-6": "_grid--lg-6_1733q_185",
  "grid--lg-7": "_grid--lg-7_1733q_188",
  "grid--lg-8": "_grid--lg-8_1733q_191",
  "grid--lg-9": "_grid--lg-9_1733q_194",
  "grid--lg-10": "_grid--lg-10_1733q_197",
  "grid--lg-11": "_grid--lg-11_1733q_200",
  "grid--lg-12": "_grid--lg-12_1733q_203",
  "grid--xl-1": "_grid--xl-1_1733q_208",
  "grid--xl-2": "_grid--xl-2_1733q_211",
  "grid--xl-3": "_grid--xl-3_1733q_214",
  "grid--xl-4": "_grid--xl-4_1733q_217",
  "grid--xl-5": "_grid--xl-5_1733q_220",
  "grid--xl-6": "_grid--xl-6_1733q_223",
  "grid--xl-7": "_grid--xl-7_1733q_226",
  "grid--xl-8": "_grid--xl-8_1733q_229",
  "grid--xl-9": "_grid--xl-9_1733q_232",
  "grid--xl-10": "_grid--xl-10_1733q_235",
  "grid--xl-11": "_grid--xl-11_1733q_238",
  "grid--xl-12": "_grid--xl-12_1733q_241",
  "grid--gap-none": "_grid--gap-none_1733q_245",
  "grid--gap-xs": "_grid--gap-xs_1733q_249",
  "grid--gap-sm": "_grid--gap-sm_1733q_253",
  "grid--gap-md": "_grid--gap-md_1733q_257",
  "grid--gap-lg": "_grid--gap-lg_1733q_261",
  "grid--gap-xl": "_grid--gap-xl_1733q_265",
  "grid--gap-xs-none": "_grid--gap-xs-none_1733q_270",
  "grid--gap-xs-xs": "_grid--gap-xs-xs_1733q_273",
  "grid--gap-xs-sm": "_grid--gap-xs-sm_1733q_276",
  "grid--gap-xs-md": "_grid--gap-xs-md_1733q_279",
  "grid--gap-xs-lg": "_grid--gap-xs-lg_1733q_282",
  "grid--gap-xs-xl": "_grid--gap-xs-xl_1733q_285",
  "grid--gap-sm-none": "_grid--gap-sm-none_1733q_290",
  "grid--gap-sm-xs": "_grid--gap-sm-xs_1733q_293",
  "grid--gap-sm-sm": "_grid--gap-sm-sm_1733q_296",
  "grid--gap-sm-md": "_grid--gap-sm-md_1733q_299",
  "grid--gap-sm-lg": "_grid--gap-sm-lg_1733q_302",
  "grid--gap-sm-xl": "_grid--gap-sm-xl_1733q_305",
  "grid--gap-md-none": "_grid--gap-md-none_1733q_310",
  "grid--gap-md-xs": "_grid--gap-md-xs_1733q_313",
  "grid--gap-md-sm": "_grid--gap-md-sm_1733q_316",
  "grid--gap-md-md": "_grid--gap-md-md_1733q_319",
  "grid--gap-md-lg": "_grid--gap-md-lg_1733q_322",
  "grid--gap-md-xl": "_grid--gap-md-xl_1733q_325",
  "grid--gap-lg-none": "_grid--gap-lg-none_1733q_330",
  "grid--gap-lg-xs": "_grid--gap-lg-xs_1733q_333",
  "grid--gap-lg-sm": "_grid--gap-lg-sm_1733q_336",
  "grid--gap-lg-md": "_grid--gap-lg-md_1733q_339",
  "grid--gap-lg-lg": "_grid--gap-lg-lg_1733q_342",
  "grid--gap-lg-xl": "_grid--gap-lg-xl_1733q_345",
  "grid--gap-xl-none": "_grid--gap-xl-none_1733q_350",
  "grid--gap-xl-xs": "_grid--gap-xl-xs_1733q_353",
  "grid--gap-xl-sm": "_grid--gap-xl-sm_1733q_356",
  "grid--gap-xl-md": "_grid--gap-xl-md_1733q_359",
  "grid--gap-xl-lg": "_grid--gap-xl-lg_1733q_362",
  "grid--gap-xl-xl": "_grid--gap-xl-xl_1733q_365",
  "gridItem": "_gridItem_1733q_369",
  "gridItem-1": "_gridItem-1_1733q_373",
  "gridItem-2": "_gridItem-2_1733q_377",
  "gridItem-3": "_gridItem-3_1733q_381",
  "gridItem-4": "_gridItem-4_1733q_385",
  "gridItem-5": "_gridItem-5_1733q_389",
  "gridItem-6": "_gridItem-6_1733q_393",
  "gridItem-7": "_gridItem-7_1733q_397",
  "gridItem-8": "_gridItem-8_1733q_401",
  "gridItem-9": "_gridItem-9_1733q_405",
  "gridItem-10": "_gridItem-10_1733q_409",
  "gridItem-11": "_gridItem-11_1733q_413",
  "gridItem-12": "_gridItem-12_1733q_417",
  "gridItem--xs-1": "_gridItem--xs-1_1733q_422",
  "gridItem--xs-2": "_gridItem--xs-2_1733q_425",
  "gridItem--xs-3": "_gridItem--xs-3_1733q_428",
  "gridItem--xs-4": "_gridItem--xs-4_1733q_431",
  "gridItem--xs-5": "_gridItem--xs-5_1733q_434",
  "gridItem--xs-6": "_gridItem--xs-6_1733q_437",
  "gridItem--xs-7": "_gridItem--xs-7_1733q_440",
  "gridItem--xs-8": "_gridItem--xs-8_1733q_443",
  "gridItem--xs-9": "_gridItem--xs-9_1733q_446",
  "gridItem--xs-10": "_gridItem--xs-10_1733q_449",
  "gridItem--xs-11": "_gridItem--xs-11_1733q_452",
  "gridItem--xs-12": "_gridItem--xs-12_1733q_455",
  "gridItem--sm-1": "_gridItem--sm-1_1733q_460",
  "gridItem--sm-2": "_gridItem--sm-2_1733q_463",
  "gridItem--sm-3": "_gridItem--sm-3_1733q_466",
  "gridItem--sm-4": "_gridItem--sm-4_1733q_469",
  "gridItem--sm-5": "_gridItem--sm-5_1733q_472",
  "gridItem--sm-6": "_gridItem--sm-6_1733q_475",
  "gridItem--sm-7": "_gridItem--sm-7_1733q_478",
  "gridItem--sm-8": "_gridItem--sm-8_1733q_481",
  "gridItem--sm-9": "_gridItem--sm-9_1733q_484",
  "gridItem--sm-10": "_gridItem--sm-10_1733q_487",
  "gridItem--sm-11": "_gridItem--sm-11_1733q_490",
  "gridItem--sm-12": "_gridItem--sm-12_1733q_493",
  "gridItem--md-1": "_gridItem--md-1_1733q_498",
  "gridItem--md-2": "_gridItem--md-2_1733q_501",
  "gridItem--md-3": "_gridItem--md-3_1733q_504",
  "gridItem--md-4": "_gridItem--md-4_1733q_507",
  "gridItem--md-5": "_gridItem--md-5_1733q_510",
  "gridItem--md-6": "_gridItem--md-6_1733q_513",
  "gridItem--md-7": "_gridItem--md-7_1733q_516",
  "gridItem--md-8": "_gridItem--md-8_1733q_519",
  "gridItem--md-9": "_gridItem--md-9_1733q_522",
  "gridItem--md-10": "_gridItem--md-10_1733q_525",
  "gridItem--md-11": "_gridItem--md-11_1733q_528",
  "gridItem--md-12": "_gridItem--md-12_1733q_531",
  "gridItem--lg-1": "_gridItem--lg-1_1733q_536",
  "gridItem--lg-2": "_gridItem--lg-2_1733q_539",
  "gridItem--lg-3": "_gridItem--lg-3_1733q_542",
  "gridItem--lg-4": "_gridItem--lg-4_1733q_545",
  "gridItem--lg-5": "_gridItem--lg-5_1733q_548",
  "gridItem--lg-6": "_gridItem--lg-6_1733q_551",
  "gridItem--lg-7": "_gridItem--lg-7_1733q_554",
  "gridItem--lg-8": "_gridItem--lg-8_1733q_557",
  "gridItem--lg-9": "_gridItem--lg-9_1733q_560",
  "gridItem--lg-10": "_gridItem--lg-10_1733q_563",
  "gridItem--lg-11": "_gridItem--lg-11_1733q_566",
  "gridItem--lg-12": "_gridItem--lg-12_1733q_569",
  "gridItem--xl-1": "_gridItem--xl-1_1733q_574",
  "gridItem--xl-2": "_gridItem--xl-2_1733q_577",
  "gridItem--xl-3": "_gridItem--xl-3_1733q_580",
  "gridItem--xl-4": "_gridItem--xl-4_1733q_583",
  "gridItem--xl-5": "_gridItem--xl-5_1733q_586",
  "gridItem--xl-6": "_gridItem--xl-6_1733q_589",
  "gridItem--xl-7": "_gridItem--xl-7_1733q_592",
  "gridItem--xl-8": "_gridItem--xl-8_1733q_595",
  "gridItem--xl-9": "_gridItem--xl-9_1733q_598",
  "gridItem--xl-10": "_gridItem--xl-10_1733q_601",
  "gridItem--xl-11": "_gridItem--xl-11_1733q_604",
  "gridItem--xl-12": "_gridItem--xl-12_1733q_607",
  "gridItem--row-1": "_gridItem--row-1_1733q_611",
  "gridItem--row-2": "_gridItem--row-2_1733q_618",
  "gridItem--row-3": "_gridItem--row-3_1733q_625",
  "gridItem--row-4": "_gridItem--row-4_1733q_632",
  "gridItem--row-5": "_gridItem--row-5_1733q_639",
  "gridItem--row-6": "_gridItem--row-6_1733q_646",
  "gridItem--row-xs-1": "_gridItem--row-xs-1_1733q_654",
  "gridItem--row-xs-2": "_gridItem--row-xs-2_1733q_660",
  "gridItem--row-xs-3": "_gridItem--row-xs-3_1733q_666",
  "gridItem--row-xs-4": "_gridItem--row-xs-4_1733q_672",
  "gridItem--row-xs-5": "_gridItem--row-xs-5_1733q_678",
  "gridItem--row-xs-6": "_gridItem--row-xs-6_1733q_684",
  "gridItem--row-sm-1": "_gridItem--row-sm-1_1733q_692",
  "gridItem--row-sm-2": "_gridItem--row-sm-2_1733q_698",
  "gridItem--row-sm-3": "_gridItem--row-sm-3_1733q_704",
  "gridItem--row-sm-4": "_gridItem--row-sm-4_1733q_710",
  "gridItem--row-sm-5": "_gridItem--row-sm-5_1733q_716",
  "gridItem--row-sm-6": "_gridItem--row-sm-6_1733q_722",
  "gridItem--row-md-1": "_gridItem--row-md-1_1733q_730",
  "gridItem--row-md-2": "_gridItem--row-md-2_1733q_736",
  "gridItem--row-md-3": "_gridItem--row-md-3_1733q_742",
  "gridItem--row-md-4": "_gridItem--row-md-4_1733q_748",
  "gridItem--row-md-5": "_gridItem--row-md-5_1733q_754",
  "gridItem--row-md-6": "_gridItem--row-md-6_1733q_760",
  "gridItem--row-lg-1": "_gridItem--row-lg-1_1733q_768",
  "gridItem--row-lg-2": "_gridItem--row-lg-2_1733q_774",
  "gridItem--row-lg-3": "_gridItem--row-lg-3_1733q_780",
  "gridItem--row-lg-4": "_gridItem--row-lg-4_1733q_786",
  "gridItem--row-lg-5": "_gridItem--row-lg-5_1733q_792",
  "gridItem--row-lg-6": "_gridItem--row-lg-6_1733q_798",
  "gridItem--row-xl-1": "_gridItem--row-xl-1_1733q_806",
  "gridItem--row-xl-2": "_gridItem--row-xl-2_1733q_812",
  "gridItem--row-xl-3": "_gridItem--row-xl-3_1733q_818",
  "gridItem--row-xl-4": "_gridItem--row-xl-4_1733q_824",
  "gridItem--row-xl-5": "_gridItem--row-xl-5_1733q_830",
  "gridItem--row-xl-6": "_gridItem--row-xl-6_1733q_836"
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
  "modals": "_modals_fbpkd_1",
  "modalBackdrop": "_modalBackdrop_fbpkd_8",
  "active": "_active_fbpkd_20",
  "removing": "_removing_fbpkd_23",
  "modal": "_modal_fbpkd_1",
  "sm": "_sm_fbpkd_51",
  "md": "_md_fbpkd_54",
  "lg": "_lg_fbpkd_57",
  "xl": "_xl_fbpkd_60",
  "full": "_full_fbpkd_63",
  "modalHeader": "_modalHeader_fbpkd_67",
  "modalBody": "_modalBody_fbpkd_78",
  "modalClose": "_modalClose_fbpkd_87"
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
  "note": "_note_18lmx_1",
  "default": "_default_18lmx_12",
  "success": "_success_18lmx_16",
  "danger": "_danger_18lmx_20",
  "warning": "_warning_18lmx_24",
  "noteTitle": "_noteTitle_18lmx_29"
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
  "title": "_title_15i16_1",
  "h1": "_h1_15i16_6",
  "h2": "_h2_15i16_10",
  "h3": "_h3_15i16_14",
  "h4": "_h4_15i16_18",
  "h5": "_h5_15i16_22",
  "h6": "_h6_15i16_26"
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
  "toasts": "_toasts_otuto_1",
  "toast": "_toast_otuto_1",
  "active": "_active_otuto_31",
  "removing": "_removing_otuto_35",
  "toastClose": "_toastClose_otuto_40",
  "accent": "_accent_otuto_57",
  "info": "_info_otuto_60",
  "warning": "_warning_otuto_63",
  "success": "_success_otuto_66",
  "danger": "_danger_otuto_69"
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
        active && Toast_module_default.active
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