import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-jobs-opportunities',
  templateUrl: './section-jobs-opportunities.component.html',
  styleUrls: ['./section-jobs-opportunities.component.sass']
})
export class SectionJobsOpportunitiesComponent implements OnInit {

  menuItems=[
    {
      name:'management',
      src:'manImg',
      position:[
        {
          title:'Position Title',
          link:'positionLink',
          description:'position Description here'
        },
        {
          title:'Position Title',
          link:'positionLink',
          description:'position Description here'
        }
      ]

    },

    {
      name:'development',
      src:'devImg',
      position:[
        {
          title:'Position Title',
          link:'positionLink',
          description:'position Description here'
        },
        {
          title:'Position Title',
          link:'positionLink',
          description:'position Description here'
        }
      ]
    },
    {
      name:'digital',
      src:'digiImg',
      position:[
        {
          title:'Position Title',
          link:'positionLink',
          description:'position Description here'
        },
        {
          title:'Position Title',
          link:'positionLink',
          description:'position Description here'
        }
      ]
    },
    {
      name:'business',
      src:'busImg',
      position:[
        {
          title:'Position Title',
          link:'positionLink',
          description:'position Description here'
        },
        {
          title:'Position Title',
          link:'positionLink',
          description:'position Description here'
        }
      ]
    },
    {
      name:'institute',
      src:'insImg',
      position:[
        {
          title:'Position Title',
          link:'positionLink',
          description:'position Description here'
        },
        {
          title:'Position Title',
          link:'positionLink',
          description:'position Description here'
        }
      ]
    },
    {
      name:'internship',
      src:'intImg',
      position:[
        {
          title:'Position Title',
          link:'positionLink',
          description:'position Description here'
        },
        {
          title:'Position Title',
          link:'positionLink',
          description:'position Description here'
        },
        {
          title:'Position Title',
          link:'positionLink',
          description:'position Description here'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
