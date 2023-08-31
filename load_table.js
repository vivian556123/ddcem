function createAudioHTML(path, flat) {
  if (flat) {
    return '<audio controls controlslist="nodownload" class="px-1" style="width: 36vw;"> <source src=' +
        path +
        ' type="audio/wav">Your browser does not support the audio element.</audio>';
  }
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}


function generateEditTable(tableId, filenames, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'noisy_female-female-samples/' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      cell.innerHTML = command.replaceAll('_', ' ');
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + 'mixture_'+ filenames[i] + '.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + 'gt_'+ filenames[i] + '.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + 'DDCEM_'+ filenames[i] + '.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + 'R-DDCEM' + filenames[i] + '.wav', false);
      cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}

function generateDiversityTable(tableId, filenames, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/edit_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      cell.innerHTML = command.replaceAll('_', ' ');
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme1.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme2.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme3.wav', false);
      cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}



function generateRemixTable(tableId, filenames, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/remix_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      // if (tableId != 'genre'){
      //   let command = 'remix this music';
      // }
      cell.innerHTML = command.replaceAll('_', ' ').replaceAll('r and b', 'r&b');

      // cell.innerHTML = 'remix this music'
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(6);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(7);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_audit_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(8);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_audit_melody.wav', false);
      cell.style.textAlign = "center";

    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(6);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(7);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(8);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}



function generateRemixGuideTable(tableId, filenames, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/remix_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      // if (tableId != 'genre'){
      //   let command = 'remix this music';
      // }
      // cell.innerHTML = command.replaceAll('_', ' ');
      cell.innerHTML = 'remix this music'
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(6);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(7);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_audit_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(8);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_audit_melody.wav', false);
      cell.style.textAlign = "center";

    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(6);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(7);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(8);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}



function generateRealTable(tableId, filenames, songnames, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/edit_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      cell.innerHTML = command.replaceAll('_', ' ');
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      let title = songnames[i];
      cell.innerHTML = title;
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme.wav', false);
      cell.style.textAlign = "center";

    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}


function generateDiversityRemixTable(tableId, filenames, page) {
  let numPerPage = 4;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/remix_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      // if (tableId != 'genre'){
      //   let command = 'remix this music';
      // }
      cell.innerHTML = command.replaceAll('_', ' ');
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_target_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme1_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(6);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme1_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(7);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme2_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(8);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme2_melody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(9);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme3_acc.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(10);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_instructme3_melody.wav', false);
      cell.style.textAlign = "center";

    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(6);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(7);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(8);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(9);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(10);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}


function generateMultiTable(tableId, filenames, page) {
  let numPerPage = 2;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/edit_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      cell.innerHTML = command.replaceAll('_', ' ');
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_source.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_round1.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_round2.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_round3.wav', false);
      cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}


function generateLongTable(tableId, filenames, page) {
  let numPerPage = 10;
  let table = document.getElementById(tableId + '-operation');
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = 'music/edit_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < 10) {
      let cell = row.insertCell(0);
      let reg = /[0-9]+/g;
      let command = filenames[i].replace(reg,"");
      cell.innerHTML = command.replaceAll('_', ' ');
      cell.style.textAlign = "center";
      if (i % 2 === 0){
        cell = row.insertCell(1);
        cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_30s_source.wav', false);
        cell.style.textAlign = "center";

        cell = row.insertCell(2);
        cell.innerHTML = '30s';
        cell.style.textAlign = "center";

        cell = row.insertCell(3);
        cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_30s_instructme.wav', false);
        cell.style.textAlign = "center";

        cell = row.insertCell(4);
        cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_30s_audit.wav', false);
        cell.style.textAlign = "center";
      } else {
        cell = row.insertCell(1);
        cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_60s_source.wav', false);
        cell.style.textAlign = "center";

        cell = row.insertCell(2);
        cell.innerHTML = '60s';
        cell.style.textAlign = "center";

        cell = row.insertCell(3);
        cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_60s_instructme.wav', false);
        cell.style.textAlign = "center";

        cell = row.insertCell(4);
        cell.innerHTML = createAudioHTML(prefix + filenames[i] + '_60s_audit.wav', false);
        cell.style.textAlign = "center";
      }
      
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }

  for (let j = (page - 1) * numPerPage+1; j < end_idx; j += 2){
    table.rows[j].cells[1].rowSpan = 2;
    table.rows[j + 1].deleteCell(1);
    table.rows[j].cells[0].rowSpan = 2;
    table.rows[j + 1].deleteCell(0);
  }
}



noisy_female_female = ['DDCEM_121-127105-0011_4970-29095-0009','DDCEM_121-127105-0028_4507-16021-0025','DDCEM_121-127105-0028_4507-16021-0025']
generateEditTable('multi_noisy', noisy_female_female , 1);



$(document).ready(function() {
  for (let i = 1; i <= 3; i++) {
    let id = '#replace-operation-' + i;
    $(id).click(function() {
      generateEditTable(
          'multi-noisy',
          noisy_female_female, i);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});
