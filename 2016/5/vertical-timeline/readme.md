Vertical Timeline for Year in Review

Content is added as a '<div class="cd-timeline-block">' block after '<section id="cd-timeline" class="cd-container">'

Vertical spacing between blocks is changed in style.css:

@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: 4em 0;		///This increases vertical spacing between blocks. Change 4em to whatever.
  }


Background colors of the timeline 'dots' can be changed in style.css:

.cd-timeline-img.cd-breaking {
  background: #75ce66;
}
.cd-timeline-img.cd-lawsuit {
  background: #c03b44;
}
.cd-timeline-img.cd-protest {
  background: #f0ca45;
}
.cd-timeline-img.cd-academic {
  background: #75ce66;
}
.cd-timeline-img.cd-sports {
  background: #c03b44;
}
.cd-timeline-img.cd-money {
  background: #f0ca45;
}

Icon spacing for FontAwesome has been achieved through spacing percentages:

i.fa-exclamation-circle{
  left: 48%;
  top: 45%;
}