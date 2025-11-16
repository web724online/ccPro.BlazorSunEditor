# ccPro.BlazorSunEditor

A powerful, lightweight, **fully client-side WYSIWYG HTML editor** for
**Blazor WebAssembly**, built on top of **SunEditor**, packaged with
**zero external dependencies**.\
All JS/CSS files are embedded inside the NuGet package --- **no need to
modify index.html**, no jQuery, no Bootstrap.

------------------------------------------------------------------------

## 🚀 Features

-   ✔ 100% client-side\
-   ✔ Zero dependencies (no jQuery / no Bootstrap)\
-   ✔ All SunEditor JS/CSS auto-loaded from by plugin
-   ✔ Fully customizable toolbar\
-   ✔ Boolean switches to enable/disable each feature\
-   ✔ Two-way binding support (`@bind-Value`)\
-   ✔ Initial content + change detection\
-   ✔ Works in **Blazor WebAssembly** and **Blazor Server**\
-   ✔ Simple clean API\
-   ✔ Perfect for CMS, admin panels, and rich text editing

------------------------------------------------------------------------

## 📦 Installation

Install via NuGet:

    dotnet add package ccPro.BlazorSunEditor

------------------------------------------------------------------------

## 🛠 Minimal Setup

no need any setup

------------------------------------------------------------------------

## ✏️ Basic Usage

``` razor
@page "/editor"
@using ccPro.BlazorSunEditor

<SunEditor
    @bind-Value="Content"
    Height="300"
/>

@code {
    private string Content = "<p>Hello world!</p>";
}
```

------------------------------------------------------------------------

## 🎛 Full Toolbar Control (Boolean Toggles)

Every toolbar button can be turned on/off:

``` razor
<SunEditor
    @bind-Value="Content"
    Height="300"
    ShowBold="true"
    ShowItalic="true"
    ShowUnderline="true"
    ShowStrike="true"
    ShowList="true"
    ShowFont="true"
    ShowFontSize="true"
    ShowColor="true"
    ShowImage="true"
    ShowVideo="true"
    ShowTable="true"
    ShowAlign="true"
    ShowParagraphStyle="true"
    ShowHorizontalRule="true"
    ShowBlockquote="true"
    ShowLink="true"
    ShowUndoRedo="true"
    ShowFullScreen="true"
/>
```

All features are **enabled by default** --- set any to `false` to
disable.

------------------------------------------------------------------------

## 📥 Initial Content

``` razor
<SunEditor Value="<h2>Hello!</h2> Text here..." />
```

------------------------------------------------------------------------

## 🔄 Two-way Binding

``` razor
<SunEditor @bind-Value="Content" />
<p>@Content</p>
```

------------------------------------------------------------------------

## 🧠 Parameters List

  Parameter              Type     Default   Description
  ---------------------- -------- --------- ---------------------------
  `Value`                string   ""        Initial HTML content
  `@bind-Value`          string   --        Two-way HTML binding
  `Height`               int      300       Editor height
  `Placeholder`          string   ""        Placeholder text
  `ReadOnly`             bool     false     Disables editing
  `ShowBold`             bool     true      Bold button
  `ShowItalic`           bool     true      Italic button
  `ShowUnderline`        bool     true      Underline
  `ShowStrike`           bool     true      Strike-through
  `ShowList`             bool     true      Ordered / unordered lists
  `ShowFont`             bool     true      Font selector
  `ShowFontSize`         bool     true      Font size selector
  `ShowColor`            bool     true      Text & background color
  `ShowImage`            bool     true      Image upload/insert
  `ShowVideo`            bool     true      Video embed
  `ShowTable`            bool     true      Insert tables
  `ShowAlign`            bool     true      Alignment tools
  `ShowParagraphStyle`   bool     true      Paragraph styles
  `ShowHorizontalRule`   bool     true      Line divider
  `ShowBlockquote`       bool     true      Blockquotes
  `ShowLink`             bool     true      Insert hyperlink
  `ShowUndoRedo`         bool     true      Undo/Redo
  `ShowFullScreen`       bool     true      Fullscreen mode


------------------------------------------------------------------------

## ❤️ Author

**Sayad Heydari**\
Senior Full-Stack Developer (.NET + Blazor)

------------------------------------------------------------------------

## 📜 License

MIT License
