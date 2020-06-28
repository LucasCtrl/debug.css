# debug.css
> Outline your components for easy CSS debugging

## 🌈 Different versions

### All elements
All elements will be outlined by a red border
![](./screenshots/allElements.png)

### Only divs
All divs on the page will be outlined by a red border
![](./screenshots/divs.png)

## 📖 Usage

It's pretty easy to use this tool. You can try it by clicking on the links below. The first click enable the tool, and the second on disable it. If you would like to use it everywhere, you can simply drag and drop the link inside you bookmarks bar.

* <a href="javascript:/* debug.css | MIT License | lucasalt.fr/work/debug.css */ if (!('is_debugging' in window)) { is_debugging = false; var debug_el = document.createElement('style'); debug_el.append(document.createTextNode(`* { outline: 1px solid red !important }`)); } function enable_debugger() { if (!is_debugging) { document.head.appendChild(debug_el); is_debugging = true; } } function disable_debugger() { if (is_debugging) { document.head.removeChild(debug_el); is_debugging = false; } } !is_debugging ? enable_debugger() : disable_debugger();" >All elements version</a>
* <a href="javascript:/* debug.css | MIT License | lucasalt.fr/work/debug.css */ if (!('is_debugging' in window)) { is_debugging = false; var debug_el = document.createElement('style'); debug_el.append(document.createTextNode(`div { outline: 1px solid red !important }`)); } function enable_debugger() { if (!is_debugging) { document.head.appendChild(debug_el); is_debugging = true; } } function disable_debugger() { if (is_debugging) { document.head.removeChild(debug_el); is_debugging = false; } } !is_debugging ? enable_debugger() : disable_debugger();" >All divs version</a>

## 👤 Author

**LucasAlt**
* Website: https://www.lucasalt.fr
* Twitter: [@LucasCtrlAlt](https://twitter.com/LucasCtrlAlt)
* GitHub: [@LucasCtrl](https://github.com/LucasCtrl)

## 🤝 Contributing

1. Fork it (https://github.com/LucasCtrl/debug.css/fork)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Show your support

Give a ⭐️ if you like this project!

<a href="https://www.patreon.com/LucasAlt">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>
<br />
<a href='https://ko-fi.com/S6S21FLR2' target='_blank'>
  <img width='160' style='border:0px;width:160px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' />
</a>

## 📝 License

Copyright © 2020 [LucasCtrl](https://github.com/LucasCtrl/debug.css/blob/master/LICENSE)<br />
This project is open source and available under the [MIT License](https://github.com/LucasCtrl/debug.css/blob/master/LICENSE)