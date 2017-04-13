// Main JavaScript File

// First Exam
var exam1 = [
  {id:1, student:'Jade', grade:95},
  {id:2, student:'Billy', grade:90},
  {id:3, student:'Rose', grade:80},
];

// Second Exam
var exam2 = [
  {id:1, student:'Jade', grade:75},
  {id:2, student:'Billy', grade:85},
  {id:3, student:'Rose', grade:90},
  {id:4, student:'Avery', grade:90},
];

// Third Exam
var exam3 = [
  {id:1, student:'Jade', grade:95},
  {id:2, student:'Billy', grade:80},
  {id:3, student:'Rose', grade:80},
  {id:4, student:'Avery', grade:70},
];

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
  // Select SVG
    var svg = d3.select('#my-svg');

    svg.attr('width', 300)
        .attr('height', 400);

  // Reusable draw function
    function draw(data)
    {
      var rects = svg.selectAll('rect').data(data, function (d)
      {
        return d.id;
      });

      rects.exit()
          .transition()
          .attr('width', 0)
          .duration(250);

      // rects.attr('y', function (d) { return 20 * d.id; })
      //     .attr('height', 18)
      //     .transition()
      //     .attr('width', function (d) { return d.grade; })
      //     .text(function (d) { return d.student; });

      rects.enter()
          .append('rect')
          .attr('y', function (d) { return 40 * d.id; })
          .attr('height', 35)
          .merge(rects)
          .transition()
          .attr('width', function (d) { return d.grade * 2; });


      var texts = svg.selectAll('text').data(data, function (d)
      {
        return d.id;
      });

      texts.enter()
          .append('text')
          .attr('y', function (d) { return 40 * d.id + 19; })
          .attr('height', 35)
          .style('fill', 'white')
          .merge(texts)
          .transition()
          .text(function (d) { return d.student; });

      texts.exit()
          .transition()
          .text('')
          .duration(250);

    }

    // Bind data to selection of rects in your svg


    // Enter rect elements


    // Entering and updating elements rects


    // Transition a remove for exiting elements


    // Perform the same data-binding for text


    // enter elements


    // Entering and updating elements rects


    // Transition a remove for exiting elements
    $('button').on('click', function() {
      var btn = $(this).attr("id");
      switch(btn){
        case 'exam-1':
          draw(exam1);
          break;
        case 'exam-2':
          draw(exam2);
          break;
        case 'exam-3':
          draw(exam3);
          break;
        default:
          break;
      };
    })



});
