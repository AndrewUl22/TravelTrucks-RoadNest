📘 Icon System — README

🎨 Overview

Этот проект использует единую систему SVG‑иконок, оформленную в минималистичном outline‑стиле:



размер: 18×18



толщина линий: 0.75



скругления: round linecap / round linejoin



заливка: none



цвет по умолчанию: black



геометрия: простые формы, чистые контуры



стиль полностью повторяет визуальный язык оригинального дизайнера



Все иконки реализованы как React‑компоненты, что делает их гибкими, переиспользуемыми и легко настраиваемыми.



📁 Folder Structure

Код

src/

└── components/

&#x20;   └── icons/

&#x20;       ├── EyeIcon.tsx

&#x20;       ├── EyeCrossedIcon.tsx

&#x20;       ├── CloseIcon.tsx

&#x20;       ├── BurgerIcon.tsx

&#x20;       ├── ChevronDownIcon.tsx

&#x20;       ├── ChevronLeftIcon.tsx

&#x20;       ├── ChevronRightIcon.tsx

&#x20;       ├── ChevronUpIcon.tsx

&#x20;       ├── FilterIcon.tsx

&#x20;       ├── DeleteIcon.tsx

&#x20;       ├── ClockIcon.tsx

&#x20;       ├── LocationIcon.tsx

&#x20;       ├── StarIcon.tsx

&#x20;       ├── CamperIcon.tsx

&#x20;       ├── EngineDieselIcon.tsx

&#x20;       ├── EnginePetrolIcon.tsx

&#x20;       ├── EngineHybridIcon.tsx

&#x20;       ├── EngineElectricIcon.tsx

&#x20;       ├── TransmissionManualIcon.tsx

&#x20;       ├── TransmissionAutomaticIcon.tsx

&#x20;       ├── BodyIntegratedIcon.tsx

&#x20;       ├── BodySemiIntegratedIcon.tsx

&#x20;       ├── BodyCampervanIcon.tsx

&#x20;       ├── ACIcon.tsx

&#x20;       ├── KitchenIcon.tsx

&#x20;       ├── BathroomIcon.tsx

&#x20;       ├── RefrigeratorIcon.tsx

&#x20;       ├── WaterIcon.tsx

&#x20;       ├── LengthIcon.tsx

&#x20;       ├── WidthIcon.tsx

&#x20;       ├── HeightIcon.tsx

&#x20;       ├── ConsumptionIcon.tsx

&#x20;       ├── HeartIcon.tsx

&#x20;       ├── HeartFilledIcon.tsx

&#x20;       ├── BookmarkIcon.tsx

&#x20;       ├── LogoutIcon.tsx

&#x20;       ├── CloseCircleIcon.tsx

&#x20;       ├── PlusIcon.tsx

&#x20;       ├── MinusIcon.tsx

&#x20;       ├── InfoIcon.tsx

&#x20;       ├── WarningIcon.tsx

&#x20;       └── index.ts

📦 Importing Icons

Все иконки экспортируются через единый файл:



ts

import { LocationIcon, EngineDieselIcon, HeartIcon } from "@/components/icons";

🧩 Usage Example

tsx

import { LocationIcon } from "@/components/icons";



export function Example() {

&#x20; return (

&#x20;   <div className="flex items-center gap-2">

&#x20;     <LocationIcon />

&#x20;     <span>Brussels, Belgium</span>

&#x20;   </div>

&#x20; );

}

🎛 Changing Size

Иконки имеют фиксированные атрибуты width="18" и height="18", но их можно переопределить:



Через inline‑style:

tsx

<LocationIcon style={{ width: 24, height: 24 }} />

Через Tailwind:

tsx

<LocationIcon className="w-6 h-6" />

🎨 Changing Color

Все иконки используют stroke="black".



Цвет можно изменить:



Через inline‑style:

tsx

<StarIcon style={{ stroke: "#FF6600" }} />

Через Tailwind:

tsx

<StarIcon className="stroke-blue-500" />

➕ Adding New Icons

Чтобы добавить новую иконку:



Создай файл:



Код

src/components/icons/NewIcon.tsx

Используй шаблон:



tsx

export function NewIcon() {

&#x20; return (

&#x20;   <svg

&#x20;     width="18"

&#x20;     height="18"

&#x20;     viewBox="0 0 18 18"

&#x20;     fill="none"

&#x20;     xmlns="http://www.w3.org/2000/svg"

&#x20;   >

&#x20;     {/\* strokes 0.75, round caps, round joins \*/}

&#x20;   </svg>

&#x20; );

}

Добавь экспорт в index.ts:



ts

export \* from "./NewIcon";

🧱 Design Rules

Чтобы иконки оставались едиными:



размер: 18×18



stroke‑width: 0.75



stroke: black



fill: none



linecap: round



linejoin: round



минимализм



никаких заливок



никаких теней



никаких сложных кривых



никаких нестандартных пропорций



🏁 Final Notes

Эта система:



полностью повторяет стиль оригинального дизайнера



легко расширяется



идеально подходит для Next.js UI



даёт полный контроль над цветом и размером



делает интерфейс единым, чистым и профессиональным

