document.addEventListener("DOMContentLoaded", function() {
  
    const navParents = document.querySelectorAll('.nav_parent');
  

    navParents.forEach(navParent => {
      navParent.addEventListener('click', function() {
      
        const items = this.nextElementSibling;
        

        const isActive = this.classList.contains('active');
        
       
        document.querySelectorAll('.nav_parent').forEach(parent => {
          parent.classList.remove('active');
          const siblingItems = parent.nextElementSibling;
          siblingItems.style.display = 'none';
          siblingItems.style.maxHeight = '0';
        });

        if (!isActive) {
          this.classList.add('active');
          items.style.display = 'block';
          items.style.maxHeight = '500px';
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const navParents = document.querySelectorAll('.footer_nav .title');
  
    navParents.forEach(navParent => {
      navParent.addEventListener('click', function () {
        const parentLi = navParent.closest('li');
        parentLi.classList.toggle('active'); 
      });
    });
  });


  const mainHead = document.querySelector('.header');
  window.addEventListener('scroll', function(){
    if(this.scrollY > 150){
      mainHead.classList.add('slidedown')
    }else {
      mainHead.classList.remove('slidedown')
    }

  }) 
  const burgerHead = document.querySelector('.burger_content');
  window.addEventListener('scroll', function(){
    if(this.scrollY > 50){
      burgerHead.classList.add('burgerdown')
    }else {
      burgerHead.classList.remove('burgerdown')
    }

  }) 



// function burgerShow() {
//   const burgerContent = document.querySelector('.burger_content');
//   const body = document.querySelector('body');

//   if (!burgerContent.classList.contains('active')) {
//       burgerContent.classList.toggle('active');
//       // body.style.overflow = 'hidden';
//   }else {
//     burgerContent.classList.remove('active');
//     // body.style.overflow = '';
//   }


  

// }


function showPanel() {
  const sidePanel = document.querySelector('.sidepanel');

  if (!sidePanel.classList.contains('active')) {
    sidePanel.classList.toggle('active');

  }else {
    sidePanel.classList.remove('active');
  }


}


function itemPanel() {
  const itemPan = document.querySelector('#itemPan');
  const headNav = document.querySelector('.sidepanheader');
  const conNav = document.querySelector('.content_nav');
  const card_item = document.querySelector('.feature_card');
  const card_item_btn = document.querySelector('.items_btn');

  if (!itemPan.classList.contains('active')) {
    itemPan.classList.toggle('active');
    headNav.classList.toggle('active');
    conNav.classList.toggle('active');
    card_item.classList.toggle('active');
    card_item_btn.classList.toggle('active');
    
  }else{
    itemPan.classList.remove('active');
    headNav.classList.remove('active');
    conNav.classList.remove('active');
    card_item.classList.remove('active');
    card_item_btn.classList.remove('active');
  }

}

function sideBarbtn() {
  const navCont_Act = document.querySelector('.sidepanel');

  if (!navCont_Act.classList.contains('cont_ac')) {
    navCont_Act.classList.toggle('cont_ac');
  }else{
    navCont_Act.classList.remove('cont_ac');
  }

}

function feature_On() {
  const featureOn = document.querySelector('.items');
  const navFT_isON = document.querySelector('.sidepanel');



  if(!featureOn.classList.contains('feature_isON')) {
    featureOn.classList.toggle('feature_isON');
    navFT_isON.classList.toggle('feature_isON');
  }else{
    featureOn.classList.remove('feature_isON');
    navFT_isON.classList.remove('feature_isON');
  }
}



function solution_On() {
  const sol_ON = document.querySelector('.sidepanel');
  sol_ON.classList.toggle('sol_ON');  
}

function resource_On() {
  const res_ON = document.querySelector('.sidepanel');
  res_ON.classList.toggle('res_ON');  
}



function drp_act() {
  const drp_ACT = document.querySelector('.header_dropdown_wrapper');
  drp_ACT.classList.toggle('active');
}




// function drp_feat() {
//   const drp_Feat = document.querySelector('.header_dropdown_container');
//   drp_Feat.classList.toggle('drp_ftt')

// }

// function drp_sol() {
//   const drp_Sol = document.querySelector('.header_dropdown_container');
//   drp_Sol.classList.toggle('drp_sol')

// }
// function drp_res() {
//   const drp_Res = document.querySelector('.header_dropdown_container');
//   drp_Res.classList.toggle('drp_res')

// }




// Function to handle dropdown toggle and adding/removing 'active' class
function toggleDropdown(activeId) {
  // Get all the dropdown contents
  const dropdowns = document.querySelectorAll('.drop_content');

  // Check if the clicked dropdown is already open
  const activeDropdown = document.getElementById(activeId);
  
  // If the clicked dropdown is already open, close it
  if (activeDropdown.style.display === 'block') {
    activeDropdown.style.display = 'none';
  } else {
    // Otherwise, close all dropdowns and open the clicked one
    dropdowns.forEach(dropdown => {
      dropdown.style.display = 'none';  // Close all dropdowns
    });
    activeDropdown.style.display = 'block';  // Open the clicked dropdown
  }

  // Get the dropdown container and toggle the 'active' class
  const drpWrapper = document.querySelector('.header_dropdown_wrapper');
  // Check if any dropdown is open
  const anyDropdownOpen = Array.from(dropdowns).some(d => d.style.display === 'block');
  if (anyDropdownOpen) {
    drpWrapper.classList.add('active');  // Add 'active' if any dropdown is open
  } else {
    drpWrapper.classList.remove('active');  // Remove 'active' if no dropdown is open
  }
}

// Attach event listeners for each button to toggle dropdowns
document.querySelector('.feat').addEventListener('click', () => toggleDropdown('drp_feat'));
document.querySelector('.sol').addEventListener('click', () => toggleDropdown('drp_sol'));
document.querySelector('.res').addEventListener('click', () => toggleDropdown('drp_reso'));
