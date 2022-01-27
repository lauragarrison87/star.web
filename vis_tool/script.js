var referenceData = [];
var triangleSize = 200;
var triangleHeight = triangleSize * (Math.sqrt(3) / 2);

var trianglesMoleculeData = []
//var trianglesOrganelleData = []
var trianglesCellData = []
var trianglesTissueData = []
var trianglesOrganData = []
//var trianglesBodyData      = []

var keywordsObject = {}

// COLORS
var colorDV = "#ffbe0b";
var colorVA = "#ff006e";
var colorIV = "#3a86ff";
var primary = "#697887";
var secondary = "#35495C";
var hover = "#D2D7DB";
var selected = "#B4BCC3";
// SELECTED COLOR "#BEC3C9";
// HOVER COLOR #F6E8D4";



var groupTriangles = [
    // dviv = 0
    {
        points: triangleSize / 2 + ' ' + 0 + ', ' + triangleSize / 4 + ' ' + triangleHeight / 2 + ', ' + triangleSize / 2 + ' ' + 2 * triangleHeight / 3 + ', ' + triangleSize / 2 + ' ' + 0,
        valueMolecule: 0,
        // valueOrganelle: 0,
        valueCell: 0,
        valueTissue: 0,
        valueOrgan: 0
            /*,
            		valueBody: 0*/
    },
    // dvva = 1
    {
        points: triangleSize / 2 + ' ' + 0 + ', ' + triangleSize / 2 + ' ' + 2 * triangleHeight / 3 + ', ' + 3 * triangleSize / 4 + ' ' + triangleHeight / 2 + ', ' + triangleSize / 2 + ' ' + 0,
        valueMolecule: 0,
        // valueOrganelle: 0,
        valueCell: 0,
        valueTissue: 0,
        valueOrgan: 0
            /*,
            		valueBody: 0*/
    },
    // ivdv = 2
    {
        points: 0 + ' ' + triangleHeight + ', ' + triangleSize / 2 + ' ' + 2 * triangleHeight / 3 + ', ' + triangleSize / 4 + ' ' + triangleHeight / 2 + ', ' + 0 + ' ' + triangleHeight,
        valueMolecule: 0,
        // valueOrganelle: 0,
        valueCell: 0,
        valueTissue: 0,
        valueOrgan: 0
            /*,
            		valueBody: 0*/
    },
    // ivva = 3
    {
        points: 0 + ' ' + triangleHeight + ', ' + triangleSize / 2 + ' ' + triangleHeight + ', ' + triangleSize / 2 + ' ' + 2 * triangleHeight / 3 + ', ' + 0 + ' ' + triangleHeight,
        valueMolecule: 0,
        // valueOrganelle: 0,
        valueCell: 0,
        valueTissue: 0,
        valueOrgan: 0
            /*,
            		valueBody: 0*/
    },
    // vaiv = 4
    {
        points: triangleSize / 2 + ' ' + triangleHeight + ', ' + triangleSize + ' ' + triangleHeight + ', ' + triangleSize / 2 + ' ' + 2 * triangleHeight / 3 + ', ' + triangleSize / 2 + ' ' + triangleHeight,
        valueMolecule: 0,
        // valueOrganelle: 0,
        valueCell: 0,
        valueTissue: 0,
        valueOrgan: 0
            /*,
            		valueBody: 0*/
    },
    // vadv = 5
    {
        points: triangleSize / 2 + ' ' + 2 * triangleHeight / 3 + ', ' + triangleSize + ' ' + triangleHeight + ', ' + 3 * triangleSize / 4 + ' ' + triangleHeight / 2 + ', ' + triangleSize / 2 + ' ' + 2 * triangleHeight / 3,
        valueMolecule: 0,
        // valueOrganelle: 0,
        valueCell: 0,
        valueTissue: 0,
        valueOrgan: 0
            /*,
            		valueBody: 0*/
    }
];

var groupTrianglesCount = {
    Molecule: 0,
    // Organelle: 0,
    Cell: 0,
    Tissue: 0,
    Organ: 0
        /*,
        	Body : 0*/
};

var fillValue = function(level, coordinates) {
    //DV
    if (coordinates.dv != 0) {
        if ((coordinates.dv >= coordinates.va) && (coordinates.dv >= coordinates.iv)) {
            if (coordinates.va >= coordinates.iv) {
                // dvva == 1
                groupTriangles[1]['value' + level] += 1;
                groupTrianglesCount[level] += 1;
            }
            if (coordinates.iv >= coordinates.va) {
                // dviv == 0
                groupTriangles[0]['value' + level] += 1;
                groupTrianglesCount[level] += 1;
            }
        }
    }

    //VA
    if (coordinates.va != 0) {
        if ((coordinates.va >= coordinates.dv) && (coordinates.va >= coordinates.iv)) {
            if (coordinates.dv >= coordinates.iv) {
                // vadv == 5
                groupTriangles[5]['value' + level] += 1;
                groupTrianglesCount[level] += 1;
            }
            if (coordinates.iv >= coordinates.dv) {
                // vaiv == 4
                groupTriangles[4]['value' + level] += 1;
                groupTrianglesCount[level] += 1;
            }
        }
    }

    //IV
    if (coordinates.iv != 0) {
        if ((coordinates.iv >= coordinates.dv) && (coordinates.iv >= coordinates.va)) {
            if (coordinates.dv >= coordinates.va) {
                // ivdv == 2
                groupTriangles[2]['value' + level] += 1;
                groupTrianglesCount[level] += 1;
            }
            if (coordinates.va >= coordinates.dv) {
                // ivva == 3
                groupTriangles[3]['value' + level] += 1;
                groupTrianglesCount[level] += 1;
            }
        }
    }
}

var heatData = [
    { time: -15, space: -10, value: 0 },
    { time: -15, space: -9, value: 0 },
    { time: -15, space: -8, value: 0 },
    { time: -15, space: -7, value: 0 },
    { time: -15, space: -6, value: 0 },
    { time: -15, space: -5, value: 0 },
    { time: -15, space: -4, value: 0 },
    { time: -15, space: -3, value: 0 },
    { time: -15, space: -2, value: 0 },
    { time: -15, space: -1, value: 0 },
    { time: -15, space: 0, value: 0 },

    { time: -14, space: -10, value: 0 },
    { time: -14, space: -9, value: 0 },
    { time: -14, space: -8, value: 0 },
    { time: -14, space: -7, value: 0 },
    { time: -14, space: -6, value: 0 },
    { time: -14, space: -5, value: 0 },
    { time: -14, space: -4, value: 0 },
    { time: -14, space: -3, value: 0 },
    { time: -14, space: -2, value: 0 },
    { time: -14, space: -1, value: 0 },
    { time: -14, space: 0, value: 0 },

    { time: -13, space: -10, value: 0 },
    { time: -13, space: -9, value: 0 },
    { time: -13, space: -8, value: 0 },
    { time: -13, space: -7, value: 0 },
    { time: -13, space: -6, value: 0 },
    { time: -13, space: -5, value: 0 },
    { time: -13, space: -4, value: 0 },
    { time: -13, space: -3, value: 0 },
    { time: -13, space: -2, value: 0 },
    { time: -13, space: -1, value: 0 },
    { time: -13, space: 0, value: 0 },

    { time: -12, space: -10, value: 0 },
    { time: -12, space: -9, value: 0 },
    { time: -12, space: -8, value: 0 },
    { time: -12, space: -7, value: 0 },
    { time: -12, space: -6, value: 0 },
    { time: -12, space: -5, value: 0 },
    { time: -12, space: -4, value: 0 },
    { time: -12, space: -3, value: 0 },
    { time: -12, space: -2, value: 0 },
    { time: -12, space: -1, value: 0 },
    { time: -12, space: 0, value: 0 },

    { time: -11, space: -10, value: 0 },
    { time: -11, space: -9, value: 0 },
    { time: -11, space: -8, value: 0 },
    { time: -11, space: -7, value: 0 },
    { time: -11, space: -6, value: 0 },
    { time: -11, space: -5, value: 0 },
    { time: -11, space: -4, value: 0 },
    { time: -11, space: -3, value: 0 },
    { time: -11, space: -2, value: 0 },
    { time: -11, space: -1, value: 0 },
    { time: -11, space: 0, value: 0 },

    { time: -10, space: -10, value: 0 },
    { time: -10, space: -9, value: 0 },
    { time: -10, space: -8, value: 0 },
    { time: -10, space: -7, value: 0 },
    { time: -10, space: -6, value: 0 },
    { time: -10, space: -5, value: 0 },
    { time: -10, space: -4, value: 0 },
    { time: -10, space: -3, value: 0 },
    { time: -10, space: -2, value: 0 },
    { time: -10, space: -1, value: 0 },
    { time: -10, space: 0, value: 0 },

    { time: -9, space: -10, value: 0 },
    { time: -9, space: -9, value: 0 },
    { time: -9, space: -8, value: 0 },
    { time: -9, space: -7, value: 0 },
    { time: -9, space: -6, value: 0 },
    { time: -9, space: -5, value: 0 },
    { time: -9, space: -4, value: 0 },
    { time: -9, space: -3, value: 0 },
    { time: -9, space: -2, value: 0 },
    { time: -9, space: -1, value: 0 },
    { time: -9, space: 0, value: 0 },

    { time: -8, space: -10, value: 0 },
    { time: -8, space: -9, value: 0 },
    { time: -8, space: -8, value: 0 },
    { time: -8, space: -7, value: 0 },
    { time: -8, space: -6, value: 0 },
    { time: -8, space: -5, value: 0 },
    { time: -8, space: -4, value: 0 },
    { time: -8, space: -3, value: 0 },
    { time: -8, space: -2, value: 0 },
    { time: -8, space: -1, value: 0 },
    { time: -8, space: 0, value: 0 },

    { time: -7, space: -10, value: 0 },
    { time: -7, space: -9, value: 0 },
    { time: -7, space: -8, value: 0 },
    { time: -7, space: -7, value: 0 },
    { time: -7, space: -6, value: 0 },
    { time: -7, space: -5, value: 0 },
    { time: -7, space: -4, value: 0 },
    { time: -7, space: -3, value: 0 },
    { time: -7, space: -2, value: 0 },
    { time: -7, space: -1, value: 0 },
    { time: -7, space: 0, value: 0 },

    { time: -6, space: -10, value: 0 },
    { time: -6, space: -9, value: 0 },
    { time: -6, space: -8, value: 0 },
    { time: -6, space: -7, value: 0 },
    { time: -6, space: -6, value: 0 },
    { time: -6, space: -5, value: 0 },
    { time: -6, space: -4, value: 0 },
    { time: -6, space: -3, value: 0 },
    { time: -6, space: -2, value: 0 },
    { time: -6, space: -1, value: 0 },
    { time: -6, space: 0, value: 0 },

    { time: -5, space: -10, value: 0 },
    { time: -5, space: -9, value: 0 },
    { time: -5, space: -8, value: 0 },
    { time: -5, space: -7, value: 0 },
    { time: -5, space: -6, value: 0 },
    { time: -5, space: -5, value: 0 },
    { time: -5, space: -4, value: 0 },
    { time: -5, space: -3, value: 0 },
    { time: -5, space: -2, value: 0 },
    { time: -5, space: -1, value: 0 },
    { time: -5, space: 0, value: 0 },

    { time: -4, space: -10, value: 0 },
    { time: -4, space: -9, value: 0 },
    { time: -4, space: -8, value: 0 },
    { time: -4, space: -7, value: 0 },
    { time: -4, space: -6, value: 0 },
    { time: -4, space: -5, value: 0 },
    { time: -4, space: -4, value: 0 },
    { time: -4, space: -3, value: 0 },
    { time: -4, space: -2, value: 0 },
    { time: -4, space: -1, value: 0 },
    { time: -4, space: 0, value: 0 },

    { time: -3, space: -10, value: 0 },
    { time: -3, space: -9, value: 0 },
    { time: -3, space: -8, value: 0 },
    { time: -3, space: -7, value: 0 },
    { time: -3, space: -6, value: 0 },
    { time: -3, space: -5, value: 0 },
    { time: -3, space: -4, value: 0 },
    { time: -3, space: -3, value: 0 },
    { time: -3, space: -2, value: 0 },
    { time: -3, space: -1, value: 0 },
    { time: -3, space: 0, value: 0 },

    { time: -2, space: -10, value: 0 },
    { time: -2, space: -9, value: 0 },
    { time: -2, space: -8, value: 0 },
    { time: -2, space: -7, value: 0 },
    { time: -2, space: -6, value: 0 },
    { time: -2, space: -5, value: 0 },
    { time: -2, space: -4, value: 0 },
    { time: -2, space: -3, value: 0 },
    { time: -2, space: -2, value: 0 },
    { time: -2, space: -1, value: 0 },
    { time: -2, space: 0, value: 0 },

    { time: -1, space: -10, value: 0 },
    { time: -1, space: -9, value: 0 },
    { time: -1, space: -8, value: 0 },
    { time: -1, space: -7, value: 0 },
    { time: -1, space: -6, value: 0 },
    { time: -1, space: -5, value: 0 },
    { time: -1, space: -4, value: 0 },
    { time: -1, space: -3, value: 0 },
    { time: -1, space: -2, value: 0 },
    { time: -1, space: -1, value: 0 },
    { time: -1, space: 0, value: 0 },

    { time: 0, space: -10, value: 0 },
    { time: 0, space: -9, value: 0 },
    { time: 0, space: -8, value: 0 },
    { time: 0, space: -7, value: 0 },
    { time: 0, space: -6, value: 0 },
    { time: 0, space: -5, value: 0 },
    { time: 0, space: -4, value: 0 },
    { time: 0, space: -3, value: 0 },
    { time: 0, space: -2, value: 0 },
    { time: 0, space: -1, value: 0 },
    { time: 0, space: 0, value: 0 },

    { time: 1, space: -10, value: 0 },
    { time: 1, space: -9, value: 0 },
    { time: 1, space: -8, value: 0 },
    { time: 1, space: -7, value: 0 },
    { time: 1, space: -6, value: 0 },
    { time: 1, space: -5, value: 0 },
    { time: 1, space: -4, value: 0 },
    { time: 1, space: -3, value: 0 },
    { time: 1, space: -2, value: 0 },
    { time: 1, space: -1, value: 0 },
    { time: 1, space: 0, value: 0 },

    { time: 2, space: -10, value: 0 },
    { time: 2, space: -9, value: 0 },
    { time: 2, space: -8, value: 0 },
    { time: 2, space: -7, value: 0 },
    { time: 2, space: -6, value: 0 },
    { time: 2, space: -5, value: 0 },
    { time: 2, space: -4, value: 0 },
    { time: 2, space: -3, value: 0 },
    { time: 2, space: -2, value: 0 },
    { time: 2, space: -1, value: 0 },
    { time: 2, space: 0, value: 0 },

    { time: 3, space: -10, value: 0 },
    { time: 3, space: -9, value: 0 },
    { time: 3, space: -8, value: 0 },
    { time: 3, space: -7, value: 0 },
    { time: 3, space: -6, value: 0 },
    { time: 3, space: -5, value: 0 },
    { time: 3, space: -4, value: 0 },
    { time: 3, space: -3, value: 0 },
    { time: 3, space: -2, value: 0 },
    { time: 3, space: -1, value: 0 },
    { time: 3, space: 0, value: 0 },

    { time: 4, space: -10, value: 0 },
    { time: 4, space: -9, value: 0 },
    { time: 4, space: -8, value: 0 },
    { time: 4, space: -7, value: 0 },
    { time: 4, space: -6, value: 0 },
    { time: 4, space: -5, value: 0 },
    { time: 4, space: -4, value: 0 },
    { time: 4, space: -3, value: 0 },
    { time: 4, space: -2, value: 0 },
    { time: 4, space: -1, value: 0 },
    { time: 4, space: 0, value: 0 },

    { time: 5, space: -10, value: 0 },
    { time: 5, space: -9, value: 0 },
    { time: 5, space: -8, value: 0 },
    { time: 5, space: -7, value: 0 },
    { time: 5, space: -6, value: 0 },
    { time: 5, space: -5, value: 0 },
    { time: 5, space: -4, value: 0 },
    { time: 5, space: -3, value: 0 },
    { time: 5, space: -2, value: 0 },
    { time: 5, space: -1, value: 0 },
    { time: 5, space: 0, value: 0 },

    { time: 6, space: -10, value: 0 },
    { time: 6, space: -9, value: 0 },
    { time: 6, space: -8, value: 0 },
    { time: 6, space: -7, value: 0 },
    { time: 6, space: -6, value: 0 },
    { time: 6, space: -5, value: 0 },
    { time: 6, space: -4, value: 0 },
    { time: 6, space: -3, value: 0 },
    { time: 6, space: -2, value: 0 },
    { time: 6, space: -1, value: 0 },
    { time: 6, space: 0, value: 0 },

    { time: 7, space: -10, value: 0 },
    { time: 7, space: -9, value: 0 },
    { time: 7, space: -8, value: 0 },
    { time: 7, space: -7, value: 0 },
    { time: 7, space: -6, value: 0 },
    { time: 7, space: -5, value: 0 },
    { time: 7, space: -4, value: 0 },
    { time: 7, space: -3, value: 0 },
    { time: 7, space: -2, value: 0 },
    { time: 7, space: -1, value: 0 },
    { time: 7, space: 0, value: 0 },

    { time: 8, space: -10, value: 0 },
    { time: 8, space: -9, value: 0 },
    { time: 8, space: -8, value: 0 },
    { time: 8, space: -7, value: 0 },
    { time: 8, space: -6, value: 0 },
    { time: 8, space: -5, value: 0 },
    { time: 8, space: -4, value: 0 },
    { time: 8, space: -3, value: 0 },
    { time: 8, space: -2, value: 0 },
    { time: 8, space: -1, value: 0 },
    { time: 8, space: 0, value: 0 },

    { time: 9, space: -10, value: 0 },
    { time: 9, space: -9, value: 0 },
    { time: 9, space: -8, value: 0 },
    { time: 9, space: -7, value: 0 },
    { time: 9, space: -6, value: 0 },
    { time: 9, space: -5, value: 0 },
    { time: 9, space: -4, value: 0 },
    { time: 9, space: -3, value: 0 },
    { time: 9, space: -2, value: 0 },
    { time: 9, space: -1, value: 0 },
    { time: 9, space: 0, value: 0 }
]

var levelData = [
    { name: "Molecule", count: 0 },
    // { name: "Organelle", count: 0 },
    { name: "Cell", count: 0 },
    { name: "Tissue", count: 0 },
    { name: "Organ", count: 0 }
    /*,
    	{name: "Body",      count: 0}*/
];

var tabulate = function(data, columns) {
    var table = d3.select('.tableContainer').append('table')
        .classed('scrollTable', true)
        .attr('border', '0')
        .attr('cellpadding', '0')
        .attr('cellspacing', '0')
        .attr('width', '100%');
    var thead = table.append('thead').classed('fixedHeader', true);
    var tbody = table.append('tbody').classed('scrollContent', true);

    thead.append('tr')
        .selectAll('th')
        .data(columns)
        .enter()
        .append('th')
        .text(function(d) { return d })
        .classed('alternateRow', true);

    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .attr('id', function(dataRow) { return 'paper' + dataRow.ID; })
        .attr('class', function(dataRow) {
            if (dataRow.Level == 'All')
            //return "Molecule Organelle Cell Tissue Organ";
                return "All";
            else
                return dataRow.Level.split(',').join(' ');
        })

    var cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function(column) {
                return { column: column, value: row[column] }
            })
        })
        .enter()
        .append('td')
        .text(function(d) { return d.value })

    rows
        .on("mouseover", function(d) {
            // select table
            d3.select(this).classed("row_hover", true);

            // select levels
            if (d.Level == "All") {
                d3.select("#Moleculebar").classed("bar_hover", true);
                // d3.select("#Organellebar").classed("bar_hover", true);
                d3.select("#Cellbar").classed("bar_hover", true);
                d3.select("#Tissuebar").classed("bar_hover", true);
                d3.select("#Organbar").classed("bar_hover", true);
                //d3.select("#Bodybar").classed("bar_hover", true);
            } else {
                d.Level.split(",").forEach(function(lev, i) {
                    d3.select("#" + lev.trim() + "bar").classed("bar_hover", true);
                });
            }


            // select heatmap
            var ss = parseInt(d["Space Scale Start"], 10);
            var sf = parseInt(d["Space Scale Finish"], 10);

            var ts = parseInt(d["Time Scale Start"], 10);
            var tf = parseInt(d["Time Scale Finish"], 10);

            if (!isNaN(ss) && !isNaN(sf) && !isNaN(ts) && !isNaN(tf)) {
                d3.select("#heatMapCover")
                    .attr("x", (ts + 15) * 19)
                    .attr("y", (-sf) * 19)
                    .attr("width", (1 + tf - ts) * 19)
                    .attr("height", (1 + sf - ss) * 19)
                    .classed("heatHidden", false);
            }

            // select categoryCircle
            var ndvx = parseFloat(d["Exploration"]) * 100;
            var ndvy = parseFloat(d["Exploration"]) * 10;

            var nivx = parseFloat(d["Communication"]) * 8.66;
            var nivy = parseFloat(d["Communication"]) * 168.20;

            var nvax = parseFloat(d["Analysis"]) * 191.34;
            var nvay = parseFloat(d["Analysis"]) * 168.20;

            d.Level.split(",").forEach(function(lev, i) {
                d3.select("#" + lev.trim() + "CcCover")
                    .attr('cx', ndvx + nivx + nvax)
                    .attr('cy', ndvy + nivy + nvay)
                    .classed("ccHidden", false);
            });
        })

    .on("mouseout", function(d) {
        // deselect table
        d3.select(this).classed("row_hover", false);

        // deselect levels
        if (d.Level == "All") {
            d3.select("#Moleculebar").classed("bar_hover", false);
            // d3.select("#Organellebar").classed("bar_hover", false);
            d3.select("#Cellbar").classed("bar_hover", false);
            d3.select("#Tissuebar").classed("bar_hover", false);
            d3.select("#Organbar").classed("bar_hover", false);
            //d3.select("#Bodybar").classed("bar_hover", false);
        } else {
            d.Level.split(",").forEach(function(lev, i) {
                d3.select("#" + lev.trim() + "bar").classed("bar_hover", false);
            });
        }

        // deselect heatmap
        d3.select("#heatMapCover").classed("heatHidden", true);

        // deselect categoryCircle
        d.Level.split(",").forEach(function(lev, i) {
            d3.select("#" + lev.trim() + "CcCover")
                .classed("ccHidden", true);
        })
    })

    .on("click", function(d) {
        console.log(d);
        d3.select(this).classed("row_hover", false);

        d3.select(".row_selected").classed("row_selected", false);
        d3.select(this).classed("row_selected", true);

        // select levels
        d3.selectAll(".bar_selected").classed("bar_selected", false);
        if (d.Level == "All") {
            d3.select("#Moleculebar").classed("bar_hover", false);
            // d3.select("#Organellebar").classed("bar_hover", false);
            d3.select("#Cellbar").classed("bar_hover", false);
            d3.select("#Tissuebar").classed("bar_hover", false);
            d3.select("#Organbar").classed("bar_hover", false);
            //d3.select("#Bodybar").classed("bar_hover", false);

            d3.select("#Moleculebar").classed("bar_selected", true);
            // d3.select("#Organellebar").classed("bar_selected", true);
            d3.select("#Cellbar").classed("bar_selected", true);
            d3.select("#Tissuebar").classed("bar_selected", true);
            d3.select("#Organbar").classed("bar_selected", true);
            //d3.select("#Bodybar").classed("bar_selected", true);
        } else {
            d.Level.split(",").forEach(function(lev, i) {
                d3.select("#" + lev.trim() + "bar").classed("bar_hover", false);
                d3.select("#" + lev.trim() + "bar").classed("bar_selected", true);
            });
        }

        // select heatmap
        var ss = parseInt(d["Space Scale Start"], 10);
        var sf = parseInt(d["Space Scale Finish"], 10);

        var ts = parseInt(d["Time Scale Start"], 10);
        var tf = parseInt(d["Time Scale Finish"], 10);

        if (!isNaN(ss) && !isNaN(sf) && !isNaN(ts) && !isNaN(tf)) {
            d3.select("#heatMapClicked")
                .attr("x", (ts + 15) * 19)
                .attr("y", (-sf) * 19)
                .attr("width", (1 + tf - ts) * 19)
                .attr("height", (1 + sf - ss) * 19)
                .classed("heatHidden", false);
        }

        // select categoryCircle
        var ndvx = parseFloat(d["Exploration"]) * 100;
        var ndvy = parseFloat(d["Exploration"]) * 10;

        var nivx = parseFloat(d["Communication"]) * 8.66;
        var nivy = parseFloat(d["Communication"]) * 168.20;

        var nvax = parseFloat(d["Analysis"]) * 191.34;
        var nvay = parseFloat(d["Analysis"]) * 168.20;

        d3.selectAll(".ccSelectSelected").classed("ccSelectSelected", false);
        d.Level.split(",").forEach(function(lev, i) {
            d3.select("#" + lev.trim() + "CcSelect")
                .attr('cx', ndvx + nivx + nvax)
                .attr('cy', ndvy + nivy + nvay)
                .classed("ccSelectSelected", true);
        });

        // update paper content
        d3.select("#paperHeaderInfo h1").html(d["Title"]);
        d3.select("#paperHeaderInfo p").html(
            d["Bibtex Authors"] +
            "</b><br/>" +
            "DOI: <a href='https://dx.doi.org/"+d["DOI"]+"' target='_blank'>"+d["DOI"]+"</a>"
        );

        d3.select("#paperText p").html("<b>Abstract:</b><br/>" + d["Abstract"]);
        d3.select("#paperImage img").attr("src", "images/" + d["Image Name"]);
    });

    return table;
}

var levelChart = function(data) {
    var margin = { top: 20, right: 20, bottom: 30, left: 40 };
    var width = 560 - margin.left - margin.right;
    var height = 300 - margin.top - margin.bottom;

    var x = d3.scale
        .ordinal()
        .rangeRoundBands([0, width], .1)
        .domain(levelData.map(function(level) { return level.name; }));

    var y = d3.scale
        .linear()
        .range([height, 0])
        .domain([0, d3.max(levelData, function(level) { return level.count + 20; })]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

    var svg = d3.select("#levelsChart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("y", -15)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Count");

    var bar = svg.selectAll("g.gbar")
        .data(levelData)
        .enter().append("g")

    .attr("class", "gbar")
        .attr("transform", function(level) { return "translate(" + x(level.name) + "," + y(level.count) + ")"; });

    bar.append("rect")
        .attr("id", function(level) { return level.name + "bar" })
        .attr("class", "bar")
        .attr("width", x.rangeBand())
        .attr("height", function(level) { return height - y(level.count); })
        .on("mouseover", function(level) {
            d3.select(this).classed("bar_hover", true);
        })
        .on("mouseout", function(level) {
            d3.select(this).classed("bar_hover", false);
        })
        .on("click", function(level) {
            d3.selectAll('tbody.scrollContent tr').style('display', 'none');
            d3.selectAll('tbody.scrollContent tr.' + level.name).style('display', 'block');
        });

    bar.append("text")
        .attr("x", 45)
        .attr("y", -5)
        .attr("class", "axis")
        .text(function(level) { return level.count.toFixed(0); });
        //.text(function(level) { return level.count.toFixed(2); });

}

var scaleHeatMap = function(data) {
    var temporalScaleLegend = ["-15", "-14", "-13", "-12", "-11", "-10", "-9", "-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var spatialScaleLegend = ["-10", "-9", "-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "0"];

    var margin = { top: 20, right: 40, bottom: 80, left: 40 };
    var width = 560 - margin.left - margin.right;
    var height = 280 - margin.top - margin.bottom;
    var gridSize = Math.floor(width / temporalScaleLegend.length);
    var heatMax = d3.max(heatData, function(d) { return d.value; });

    var svg = d3.select("#scaleHeatMap").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var spatialLabels = svg.selectAll('.spatialLabel')
        .data(spatialScaleLegend).enter()
        .append('text')
        .text(function(d) { return d; })
        .attr('x', 0)
        .attr('y', function(d, i) { return (spatialScaleLegend.length - 1 - i) * gridSize; })
        .style('text-anchor', 'end')
        .attr('transform', 'translate(-6,' + gridSize / 1.5 + ')')
        .attr('class', 'spatialLabel mono axis axis-workweek');

    svg.append('text')
        .text('Spatial scale')
        .attr('x', 0)
        .attr('y', 0)
        .style('text-anchor', 'end')
        .attr('transform', 'translate(-25, 70)  rotate(-90)')
        .attr('class', 'spatialLabel mono axis axis-workweek');

    var timeLabels = svg.selectAll('.temporalLabel')
        .data(temporalScaleLegend).enter()
        .append('text')
        .text(function(d) { return d; })
        .attr('x', function(d, i) { return i * gridSize; })
        .attr('y', (spatialScaleLegend.length + 1) * gridSize)
        .style('text-anchor', 'middle')
        .attr('transform', 'translate(' + gridSize / 2 + ', -6)')
        .attr('class', 'temporalLabel mono axis axis-worktime');

    svg.append('text')
        .text('Temporal scale')
        .attr('x', 300)
        .attr('y', 250)
        .style('text-anchor', 'end')
        .attr('transform', 'translate(' + gridSize / 2 + ', -6)')
        .attr('class', 'spatialLabel mono axis axis-workweek');

    var cards = svg.selectAll('.cell')
        .data(heatData).enter()
        .append("rect")
        .attr("x", function(d) { return (d.time + 15) * gridSize; })
        .attr("y", function(d) { return (-d.space) * gridSize; })
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("class", "cell bordered")
        .attr("width", gridSize)
        .attr("height", gridSize)
        .style("fill", function(d) {
            var colorValue = 255 - Math.floor((6 / 5 - 6 / (5 + 25 * (d.value / heatMax))) * 255);
            return 'rgb(' + colorValue + ', ' + colorValue + ', ' + colorValue + ')';
        })
        .append('title')
        .text(function(d) { return d.value.toFixed(2); });

    svg.append("rect")
        .attr("id", "heatMapClicked")
        .attr("x", 0)
        .attr("y", 0)
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("class", "cell bordered")
        .attr("width", 0)
        .attr("height", 0)
        .style("fill", selected)
        .style("opacity", 0.5)
        .style("stroke", secondary)
        //.style("fill", 'rgba(204, 153, 102, 0.9)') // color fill for selected cell(s)

    svg.append("rect")
        .attr("id", "heatMapCover")
        .attr("x", 0)
        .attr("y", 0)
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("class", "cell bordered heatHidden")
        .attr("width", 0)
        .attr("height", 0)
        .style("fill", hover) // color fill for hovered cell(s)
        .style("opacity", 0.7)
        .style("stroke", primary)
        //.style("fill", 'rgba(232, 192, 154, 0.9)')

    var legend = svg.append("g")
        .attr("class", "legend");

    var legendCount = 1; //20
    var legendElementSize = gridSize * spatialScaleLegend.length / legendCount;

    //legend custom gradient from https://www.visualcinnamon.com/2016/05/smooth-color-legend-d3-svg-gradient/
    //Append a defs (for definition) element to your SVG
    var defs = svg.append("defs");

    //Append a linearGradient element to the defs and give it a unique id
    var linearGradient = defs.append("linearGradient")
        .attr("id", "linear-gradient");

    //vertical gradient
    linearGradient
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "0%")
        .attr("y2", "100%");

    //Set the color for the start (0%)
    linearGradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#000000"); //black

    //Set the color for the end (100%)
    linearGradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#ffffff"); //white

    legend.append("rect")
        .attr("x", width + 0.5 * gridSize - 6)
        .attr("y", legendElementSize - height - 30)
        //.attr("rx", 4)
        //.attr("ry", 4)
        .attr("width", gridSize*0.75)
        .attr("height", legendElementSize)
        .attr('class', 'bordered')
        .style("fill", "url(#linear-gradient)");

    legend.append("text")
        .attr("class", "mono")
        .text(function(d) { return Math.round( heatMax ); })
        .attr("x", width + 1.5 * gridSize - 6)
        .attr("y", legendElementSize - height - 22)

    legend.append("text")
        .attr("class", "mono")
        .text("0")
        .attr("x", width + 1.5 * gridSize - 6)
        .attr("y", legendElementSize)
}

var fillCategoryTriangles = function(level, dataObject) {
    var maxCount = 0;
    var circleCount = 0;
    var dataArray = new Array();
    for (var name in dataObject) {
        dataArray.push(dataObject[name]);

        circleCount += dataObject[name].length;

        if (dataObject[name].length > maxCount)
            maxCount = dataObject[name].length;
    }

    var margin = { top: 15, right: 15, bottom: 15, left: 15 };
    var width = 250 - margin.left - margin.right;
    var height = 230 - margin.top - margin.bottom;
    var circleSize = 5;
    var triangleOffset = 10;
    var triangleOffsetCoord = triangleOffset / Math.sqrt(2);

    var purposeCircleSize = 20;

    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    var svg = d3.select("#triangle" + level).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var circleDV = svg.append('g')
        .attr('class', 'circleDV')
        .attr('transform', 'translate(' + (purposeCircleSize / 2 + triangleSize / 2) + ', ' + purposeCircleSize / 2 + ')');
    circleDV.append('circle')
        .attr('cx', 0)
        .attr('cy', -3)
        .attr('r', purposeCircleSize)
        .style('stroke', colorDV) //#963
        .style('fill', colorDV); //#C96
    circleDV
        .append('text')
        .text('E')
        .attr("x", -4)
        .attr("y", -1)
        .style('fill', 'white');

    var circleIV = svg.append('g')
        .attr('class', 'circleIV')
        .attr('transform', 'translate(' + purposeCircleSize / 2 + ', ' + (triangleHeight + purposeCircleSize / 2) + ')');
    circleIV.append('circle')
        .attr('cx', -4)
        .attr('cy', 0)
        .attr('r', 20)
        .style('stroke', colorIV) //#963
        .style('fill', colorIV); //#C96
    circleIV
        .append('text')
        .text('C')
        .attr("x", -15)
        .attr("y", 5)
        .style('fill', 'white');

    var circleVA = svg.append('g')
        .attr('class', 'circleVA')
        .attr('transform', 'translate(' + (triangleSize + purposeCircleSize / 2) + ', ' + (triangleHeight + purposeCircleSize / 2) + ')');
    circleVA.append('circle')
        .attr('cx', 4)
        .attr('cy', 0)
        .attr('r', 20)
        .style('stroke', colorVA) //#963
        .style('fill', colorVA); //#C96
    circleVA
        .append('text')
        .text('A')
        .attr("x", 0)
        .attr("y", 5)
        .style('fill', 'white');

    var triangleGroup = svg.append('g')
        .attr('class', 'triangleGroup')
        .attr('transform', 'translate(' + purposeCircleSize / 2 + ', ' + purposeCircleSize / 2 + ')');

    var trianglePoints =
        triangleSize / 2 + ' ' + 0 + ', ' +
        0 + ' ' + triangleHeight + ', ' +
        triangleSize + ' ' + triangleHeight + ', ' +
        triangleSize / 2 + ' ' + 0;

    triangleGroup.append('polyline')
        .attr('points', trianglePoints)
        .style('stroke', 'black')
        .style('fill', 'white');

    triangleGroup.selectAll('.groupTriangles').data(groupTriangles).enter()
        .append('polyline')
        .attr('points', function(triangle) { return triangle.points; })
        .style('stroke', 'black')
        .style('fill', function(triangle) {
            var newColor = triangle['value' + level] / groupTrianglesCount[level];
            return 'rgb(' + (255 - Math.round(255 * newColor)) + ', ' + (255 - Math.round(255 * newColor)) + ', ' + (255 - Math.round(255 * newColor)) + ')'
        });

    var circleGroup = triangleGroup.append('g')
        .attr('class', level + 'circleGroup')

    var ndvx = triangleSize / 2;
    var ndvy = triangleOffset;

    var nivx = Math.sqrt(3) * triangleOffset / 2;
    var nivy = triangleHeight - triangleOffset / 2;

    var nvax = triangleSize - Math.sqrt(3) * triangleOffset / 2;
    var nvay = triangleHeight - triangleOffset / 2;

    circleGroup.selectAll('.cell')
        .data(dataArray).enter()
        .append('circle')
        .attr('cx', function(moleculeGroup) { return (moleculeGroup[0].dv * ndvx) + (moleculeGroup[0].iv * nivx) + (moleculeGroup[0].va * nvax); })
        .attr('cy', function(moleculeGroup) { return (moleculeGroup[0].dv * ndvy) + (moleculeGroup[0].iv * nivy) + (moleculeGroup[0].va * nvay); })
        .attr('r', circleSize)
        .style('stroke', 'black')
        .style('fill', function(moleculeGroup) {
            var newColor = 255 - Math.round(255 * (moleculeGroup.length / maxCount));
            return 'rgb(' + newColor + ', ' + newColor + ', ' + newColor + ')';
        })
        .on("mouseover", function(d) {
            var htmlTxt = '';
            var titleMax = 0;
            d.forEach(function(element, index, array) {
                htmlTxt += '<div>' + referenceData[element.id]['Title'] + '</div>'

                if (index < (d.length - 1))
                    htmlTxt += '<hr>';

                if (referenceData[element.id]['Title'].length > titleMax) {
                    titleMax = referenceData[element.id]['Title'].length;
                }
            });

            div.transition()
                .duration(200)
                .style('opacity', .9);
            div.html(htmlTxt)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
            div.transition()
                .duration(500)
                .style("opacity", 0);
        });

    circleGroup.append("circle")
        .attr("id", level + "CcSelect")
        .attr("class", "ccHidden")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 8)
        .style('stroke', 'black')
        .style('fill', 'rgba(180, 188, 195, 0.9)')

    circleGroup.append("circle")
        .attr("id", level + "CcCover")
        .attr("class", "ccHidden")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 10)
        .style('stroke', 'black')
        .style('fill', 'rgba(210, 215, 219, 0.9)')

    var circleLegend = svg.append('g').attr('class', 'circleLegend');
    var legendItemsCount = maxCount > 5 ? 5 : maxCount + 1;
    for (var i = 0; i < legendItemsCount; i++) {
        var legendValue = Math.round(i * (maxCount / (legendItemsCount - 1)));
        var circleLegendNode = circleLegend.append('g')
            .attr('class', 'circleLegend' + i)
            .attr('transform', 'translate(' + 0 + ', ' + i * 17 + ')');

        circleLegendNode.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', circleSize)
            .style('stroke', 'black')
            .style('fill', function(x) {
                var newColor = 255 - Math.round(255 * (legendValue / maxCount));
                return 'rgb(' + newColor + ', ' + newColor + ', ' + newColor + ')';
            })

        circleLegendNode.append('text')
            .text(legendValue)
            .attr("x", 15)
            .attr("y", 4);
    }
}

var keywordsBubbleChart = function(data) {
    var keywordsArray = [];

    for (var keyword in keywordsObject) {
        if (keyword !== '---') {
            var sizeTresholded = keywordsObject[keyword] > 20 ? 20 : keywordsObject[keyword];
            keywordsArray.push({ text: keyword, size: 10 + sizeTresholded });
        }
    }

    var cloudWidth = 600;
    var cloudHeight = cloudWidth / 2 + 20;

    var color = d3.scale.ordinal().range(['#fdae6b', '#969696', '#fd8d3c', '#636363', '#7f2704', '#252525']);

    d3.layout.cloud()
        .size([cloudWidth, cloudHeight])
        .words(keywordsArray)
        .rotate(function() { return 0; })
        .font("Impact")
        .fontSize(function(d) { return d.size; })
        .on("end", draw)
        .start();

    function draw(words) {
        var cloudSVG = d3.select("#keywordsBubbleChart").append("svg")
            .attr("width", cloudWidth)
            .attr("height", cloudHeight)
            .append("g")
            .attr("transform", "translate(" + cloudWidth / 2 + ", " + cloudHeight / 2 + ")");

        var textGroup = cloudSVG.selectAll("g")
            .data(words).enter()
            .append("g");

        textGroup.append('text')
            .style("font-size", function(d) { return d.size + "px"; })
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return color(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });

        textGroup.append('title').text(function(d) { return keywordsObject[d.text]; });
    }

    /*
    	var diameter = 650;
    	var format   = d3.format(",d");
    	var color    = d3.scale.ordinal().range(['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704']);

    	var bubble = d3.layout.pack()
    		.sort( function(a, b)
    		{
    			var threshold = 15;
    			if ((a.value > threshold) && (b.value > threshold)) {
    			return (a.value - b.value);
    			} else {
    				return 1;
    			}
    		})
    		.size([diameter, diameter])
    		.padding(1.5);

    	var svg = d3.select("#keywordsBubbleChart").append("svg")
    		.attr("width", diameter)
    		.attr("height", diameter);

    	var node = svg.selectAll(".node")
    		.data(bubble.nodes({children:keywordsArray}))
    		.enter().append("g")
    			.filter(function(d) { return !d.children && d.name != '---'; })
    			.attr("class", "node")
    			.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

    	node.append("title")
    		.text(function(d) { return d.name + ": " + format(d.value); });

    	node.append("circle")
    		.attr("r", function(d) { return d.r; })
    		.style("stroke", "black")
    		.style("fill", function(d) { return color(d.name); });

    	node.append("text")
    		.attr("dy", ".3em")
    		.style("text-anchor", "middle")
    		.text(function(d) { return d.name.substring(0, d.r / 3); });
    		*/
}

var fillImageCollection = function(data) {
    var divContainer = d3.select('#imageCollection');

    data.forEach(function(row) {
        if (row['Image Name'] !== '---') {
            var rowNum = 0;

            var dv = row['Direct Vis'];//.replace(',', '.');
            var va = row['Vis analysis'];//.replace(',', '.');
            var iv = row['Illus Vis'];//.replace(',', '.');

            if ((dv >= va) && (dv >= iv))
                rowNum = 1;
            else if ((va >= dv) && (va >= iv))
                rowNum = 2;
            else if ((iv >= dv) && (iv >= va))
                rowNum = 3;

            var selectedRow = divContainer.select('table>tbody tr:nth-child(' + rowNum + ')');

            var levels = row['Level'].split(',');
            levels.forEach(function(e) {
                var selectedCell;
                switch (e.trim()) {
                    case "Molecule":
                        selectedCell = selectedRow.select('td:nth-child(2)');
                        break;

                    // case "Organelle":
                    //     selectedCell = selectedRow.select('td:nth-child(3)');
                    //     break;

                    case "Cell":
                        selectedCell = selectedRow.select('td:nth-child(4)');
                        break;

                    case "Tissue":
                        selectedCell = selectedRow.select('td:nth-child(5)');
                        break;

                    case "Organ":
                        selectedCell = selectedRow.select('td:nth-child(6)');
                        break;
                        /*
                        case "Body":
                        	selectedCell = selectedRow.select('td:nth-child(7)');
                        	break;
                        */
                    default:
                        break;
                }

                if (typeof(selectedCell) !== 'undefined') {
                    selectedCell.append('img')
                        .attr("src", 'images/' + row['Image Name'])
                        .attr("title", row['Title'])
                        .attr("width", 32)
                        .attr("height", 32);
                }
            });
        }
    });
}

d3.text("data/papers.csv", function(data) {
    var columns = ['ID', 'Author', 'Title', 'Year'];
    //var dsv = d3.dsv(";", "text/plain"); //original
    var dsv = d3.dsv(",", "text/plain");
    var parsedCSV = dsv.parse(data);

    parsedCSV.forEach(function(d) {
        console.log(d);
        //for levels & triangles
        if (d['Level'] == "All" && d['Purpose test'] == '1') {
            levelData[0].count += 1 / 6;
            // levelData[1].count += 1 / 6;
            levelData[2].count += 1 / 6;
            levelData[3].count += 1 / 6;
            levelData[4].count += 1 / 6;
            //levelData[5].count += 1/6;

            var coordinates = {
                id: +d['ID'],
                dv: parseFloat(d['Exploration']),//.replace(',', '.')),
                va: parseFloat(d['Analysis']),//.replace(',', '.')),
                iv: parseFloat(d['Communication']),//.replace(',', '.'))
            };

            var strIndex = coordinates.dv + '_' + coordinates.va + '_' + coordinates.iv;

            // MOLECULES
            if (typeof(trianglesMoleculeData[strIndex]) == "undefined") {
                trianglesMoleculeData[strIndex] = new Array();
            }
            trianglesMoleculeData[strIndex].push(coordinates);

            // ORGANELLES
            // if (typeof(trianglesOrganelleData[strIndex]) == "undefined") {
            //     trianglesOrganelleData[strIndex] = new Array();
            // }
            // trianglesOrganelleData[strIndex].push(coordinates);

            // CELL
            if (typeof(trianglesCellData[strIndex]) == "undefined") {
                trianglesCellData[strIndex] = new Array();
            }
            trianglesCellData[strIndex].push(coordinates);

            // TISSUE
            if (typeof(trianglesTissueData[strIndex]) == "undefined") {
                trianglesTissueData[strIndex] = new Array();
            }
            trianglesTissueData[strIndex].push(coordinates);

            // ORGAN
            if (typeof(trianglesOrganData[strIndex]) == "undefined") {
                trianglesOrganData[strIndex] = new Array();
            }
            trianglesOrganData[strIndex].push(coordinates);
            /*
            // BODY
            if(typeof(trianglesBodyData[strIndex]) == "undefined")
            {
            	trianglesBodyData[strIndex] = new Array();
            }
            trianglesBodyData[strIndex].push(coordinates);
            */
        } else if (d['Purpose test'] == '1') {
            var levels = d.Level.split(',');
            var levelCount = levels.length;

            levels.forEach(function(e) {
                switch (e.trim()) {
                    case "Molecule":
                        levelData[0].count += 1 / levelCount;
                        var coordinates = {
                            id: +d['ID'],
                            dv: Number(d['Exploration']),//.replace(',', '.')),
                            va: Number(d['Analysis']),//.replace(',', '.')),
                            iv: Number(d['Communication']),//.replace(',', '.'))
                        };
                        fillValue(e.trim(), coordinates);

                        var strIndex = coordinates.dv + '_' + coordinates.va + '_' + coordinates.iv;
                        if (typeof(trianglesMoleculeData[strIndex]) == "undefined") {
                            trianglesMoleculeData[strIndex] = new Array();
                        }
                        trianglesMoleculeData[strIndex].push(coordinates);
                        break;

                    // case "Organelle":
                    //     levelData[1].count += 1 / levelCount;
                    //     var coordinates = {
                    //         id: +d['ID'],
                    //         dv: Number(d['Exploration']),//.replace(',', '.')),
                    //         va: Number(d['Analysis']),//.replace(',', '.')),
                    //         iv: Number(d['Communication']),//.replace(',', '.'))
                    //     };
                    //     fillValue(e.trim(), coordinates);
                    //
                    //     var strIndex = coordinates.dv + '_' + coordinates.va + '_' + coordinates.iv;
                    //     if (typeof(trianglesOrganelleData[strIndex]) == "undefined") {
                    //         trianglesOrganelleData[strIndex] = new Array();
                    //     }
                    //     trianglesOrganelleData[strIndex].push(coordinates);
                    //     break;

                    case "Cell":
                        levelData[1].count += 1 / levelCount;
                        var coordinates = {
                            id: +d['ID'],
                            dv: Number(d['Exploration']),//.replace(',', '.')),
                            va: Number(d['Analysis']),//.replace(',', '.')),
                            iv: Number(d['Communication']),//.replace(',', '.'))
                        };
                        fillValue(e.trim(), coordinates);

                        var strIndex = coordinates.dv + '_' + coordinates.va + '_' + coordinates.iv;
                        if (typeof(trianglesCellData[strIndex]) == "undefined") {
                            trianglesCellData[strIndex] = new Array();
                        }
                        trianglesCellData[strIndex].push(coordinates);
                        break;

                    case "Tissue":
                        levelData[2].count += 1 / levelCount;
                        var coordinates = {
                            id: +d['ID'],
                            dv: Number(d['Exploration']),//.replace(',', '.')),
                            va: Number(d['Analysis']),//.replace(',', '.')),
                            iv: Number(d['Communication'])//.replace(',', '.'))
                        };
                        fillValue(e.trim(), coordinates);

                        var strIndex = coordinates.dv + '_' + coordinates.va + '_' + coordinates.iv;
                        if (typeof(trianglesTissueData[strIndex]) == "undefined") {
                            trianglesTissueData[strIndex] = new Array();
                        }
                        trianglesTissueData[strIndex].push(coordinates);
                        break;

                    case "Organ":
                        levelData[3].count += 1 / levelCount;
                        var coordinates = {
                            id: +d['ID'],
                            dv: Number(d['Exploration']),//.replace(',', '.')),
                            va: Number(d['Analysis']),//.replace(',', '.')),
                            iv: Number(d['Communication'])//.replace(',', '.'))
                        }
                        fillValue(e.trim(), coordinates);

                        var strIndex = coordinates.dv + '_' + coordinates.va + '_' + coordinates.iv;
                        if (typeof(trianglesOrganData[strIndex]) == "undefined") {
                            trianglesOrganData[strIndex] = new Array();
                        }
                        trianglesOrganData[strIndex].push(coordinates);
                        break;
                        /*
                        case "Body":
                        	levelData[5].count += 1/levelCount;
                        	var coordinates = {
                        		id:+d['ID'],
                        		dv:Number(d['Direct Vis'].replace(',', '.')),
                        		va:Number(d['Vis analysis'].replace(',', '.')),
                        		iv:Number(d['Illus Vis'].replace(',', '.'))
                        	};
                        	fillValue(e.trim(), coordinates);

                        	var strIndex = coordinates.dv + '_' + coordinates.va + '_' + coordinates.iv;
                        	if(typeof(trianglesBodyData[strIndex]) == "undefined")
                        	{
                        		trianglesBodyData[strIndex] = new Array();
                        	}
                        	trianglesBodyData[strIndex].push(coordinates);
                        	break;
                        */
                    default:
                        break;
                }
            });
        }

        //for bubblechart
        var keywords = d.Keywords.split(',');
        var keywordsCount = keywords.length;

        keywords.forEach(function(keyword) {
            if (typeof(keywordsObject[keyword.trim()]) == "undefined") {
                keywordsObject[keyword.trim()] = 1;
            } else {
                keywordsObject[keyword.trim()]++;
            }
        });


        //for interaction
        referenceData[+d['ID']] = d;

        //for heatmap
        var spaceStart = +d["Space Scale Start"];
        var spaceEnd = +d["Space Scale Finish"];
        var timeStart = +d["Time Scale Start"];
        var timeEnd = +d["Time Scale Finish"];

        if (isNaN(spaceStart) || isNaN(spaceEnd) || isNaN(timeStart) || isNaN(timeEnd))
            return;

        var scaleCount = (spaceEnd - spaceStart + 1) * (timeEnd - timeStart + 1);

        for (var spaceStep = spaceStart; spaceStep <= spaceEnd; ++spaceStep) {
            for (var timeStep = timeStart; timeStep <= timeEnd; ++timeStep) {
                heatData[(timeStep + 15) * 11 + (spaceStep + 10)].value += 1 / scaleCount;
            }
        }
    });

    tabulate(parsedCSV, columns);
    levelChart(parsedCSV);
    scaleHeatMap(parsedCSV);

    fillCategoryTriangles("Molecule", trianglesMoleculeData);
    // fillCategoryTriangles("Organelle", trianglesOrganelleData);
    fillCategoryTriangles("Cell", trianglesCellData);
    fillCategoryTriangles("Tissue", trianglesTissueData);
    fillCategoryTriangles("Organ", trianglesOrganData);
    //fillCategoryTriangles("Body",      trianglesBodyData);

    //keywordsBubbleChart(parsedCSV);
    fillImageCollection(parsedCSV);
})
