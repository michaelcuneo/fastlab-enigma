/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
      id
      date
      title
      abstract
      details
      funding
      videoURL
      categoryId
      featured
      featuredImage {
        id
        key
        mime
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
      }
      category {
        id
        label
        value
        description
        Project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
      collaborators {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
      id
      date
      title
      abstract
      details
      funding
      videoURL
      categoryId
      featured
      featuredImage {
        id
        key
        mime
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
      }
      category {
        id
        label
        value
        description
        Project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
      collaborators {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
      id
      date
      title
      abstract
      details
      funding
      videoURL
      categoryId
      featured
      featuredImage {
        id
        key
        mime
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
      }
      category {
        id
        label
        value
        description
        Project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
      collaborators {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      data
      date
      videoURL
      featuredImage {
        id
        key
        mime
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
      staffID {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      data
      date
      videoURL
      featuredImage {
        id
        key
        mime
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
      staffID {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      data
      date
      videoURL
      featuredImage {
        id
        key
        mime
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
      staffID {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      label
      value
      description
      Project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      label
      value
      description
      Project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      label
      value
      description
      Project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole {
    onCreateRole {
      id
      label
      value
      description
      staff {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole {
    onUpdateRole {
      id
      label
      value
      description
      staff {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole {
    onDeleteRole {
      id
      label
      value
      description
      staff {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateStaffRoles = /* GraphQL */ `
  subscription OnCreateStaffRoles {
    onCreateStaffRoles {
      id
      roleId
      role {
        id
        label
        value
        description
        staff {
          items {
            id
            roleId
          }
          nextToken
        }
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateStaffRoles = /* GraphQL */ `
  subscription OnUpdateStaffRoles {
    onUpdateStaffRoles {
      id
      roleId
      role {
        id
        label
        value
        description
        staff {
          items {
            id
            roleId
          }
          nextToken
        }
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteStaffRoles = /* GraphQL */ `
  subscription OnDeleteStaffRoles {
    onDeleteStaffRoles {
      id
      roleId
      role {
        id
        label
        value
        description
        staff {
          items {
            id
            roleId
          }
          nextToken
        }
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateProjectStaff = /* GraphQL */ `
  subscription OnCreateProjectStaff {
    onCreateProjectStaff {
      id
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateProjectStaff = /* GraphQL */ `
  subscription OnUpdateProjectStaff {
    onUpdateProjectStaff {
      id
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteProjectStaff = /* GraphQL */ `
  subscription OnDeleteProjectStaff {
    onDeleteProjectStaff {
      id
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
      staff {
        id
        name
        firstName
        lastName
        mugshot
        title
        bio
        email
        website
        cognitoID
        posts {
          items {
            id
            title
            data
            date
            videoURL
          }
          nextToken
        }
        roles {
          items {
            id
            roleId
          }
          nextToken
        }
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateStaff = /* GraphQL */ `
  subscription OnCreateStaff {
    onCreateStaff {
      id
      name
      firstName
      lastName
      mugshot
      title
      bio
      email
      website
      cognitoID
      posts {
        items {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
      roles {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
      projects {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateStaff = /* GraphQL */ `
  subscription OnUpdateStaff {
    onUpdateStaff {
      id
      name
      firstName
      lastName
      mugshot
      title
      bio
      email
      website
      cognitoID
      posts {
        items {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
      roles {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
      projects {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteStaff = /* GraphQL */ `
  subscription OnDeleteStaff {
    onDeleteStaff {
      id
      name
      firstName
      lastName
      mugshot
      title
      bio
      email
      website
      cognitoID
      posts {
        items {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
      roles {
        items {
          id
          roleId
          role {
            id
            label
            value
            description
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
      projects {
        items {
          id
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          staff {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
    onCreateImage {
      id
      key
      mime
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
      post {
        id
        title
        data
        date
        videoURL
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        staffID {
          id
          name
          firstName
          lastName
          mugshot
          title
          bio
          email
          website
          cognitoID
          posts {
            nextToken
          }
          roles {
            nextToken
          }
          projects {
            nextToken
          }
        }
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
    onUpdateImage {
      id
      key
      mime
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
      post {
        id
        title
        data
        date
        videoURL
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        staffID {
          id
          name
          firstName
          lastName
          mugshot
          title
          bio
          email
          website
          cognitoID
          posts {
            nextToken
          }
          roles {
            nextToken
          }
          projects {
            nextToken
          }
        }
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
    onDeleteImage {
      id
      key
      mime
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
      post {
        id
        title
        data
        date
        videoURL
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        staffID {
          id
          name
          firstName
          lastName
          mugshot
          title
          bio
          email
          website
          cognitoID
          posts {
            nextToken
          }
          roles {
            nextToken
          }
          projects {
            nextToken
          }
        }
      }
      gallery {
        id
        name
        project {
          id
          date
          title
          abstract
          details
          funding
          videoURL
          categoryId
          featured
          featuredImage {
            id
            key
            mime
          }
          category {
            id
            label
            value
            description
          }
          gallery {
            id
            name
          }
          collaborators {
            nextToken
          }
        }
        post {
          id
          title
          data
          date
          videoURL
          featuredImage {
            id
            key
            mime
          }
          gallery {
            id
            name
          }
          staffID {
            id
            name
            firstName
            lastName
            mugshot
            title
            bio
            email
            website
            cognitoID
          }
        }
        images {
          items {
            id
            key
            mime
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateGallery = /* GraphQL */ `
  subscription OnCreateGallery {
    onCreateGallery {
      id
      name
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
      post {
        id
        title
        data
        date
        videoURL
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        staffID {
          id
          name
          firstName
          lastName
          mugshot
          title
          bio
          email
          website
          cognitoID
          posts {
            nextToken
          }
          roles {
            nextToken
          }
          projects {
            nextToken
          }
        }
      }
      images {
        items {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateGallery = /* GraphQL */ `
  subscription OnUpdateGallery {
    onUpdateGallery {
      id
      name
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
      post {
        id
        title
        data
        date
        videoURL
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        staffID {
          id
          name
          firstName
          lastName
          mugshot
          title
          bio
          email
          website
          cognitoID
          posts {
            nextToken
          }
          roles {
            nextToken
          }
          projects {
            nextToken
          }
        }
      }
      images {
        items {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteGallery = /* GraphQL */ `
  subscription OnDeleteGallery {
    onDeleteGallery {
      id
      name
      project {
        id
        date
        title
        abstract
        details
        funding
        videoURL
        categoryId
        featured
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        category {
          id
          label
          value
          description
          Project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        collaborators {
          items {
            id
          }
          nextToken
        }
      }
      post {
        id
        title
        data
        date
        videoURL
        featuredImage {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        gallery {
          id
          name
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          images {
            nextToken
          }
        }
        staffID {
          id
          name
          firstName
          lastName
          mugshot
          title
          bio
          email
          website
          cognitoID
          posts {
            nextToken
          }
          roles {
            nextToken
          }
          projects {
            nextToken
          }
        }
      }
      images {
        items {
          id
          key
          mime
          project {
            id
            date
            title
            abstract
            details
            funding
            videoURL
            categoryId
            featured
          }
          post {
            id
            title
            data
            date
            videoURL
          }
          gallery {
            id
            name
          }
        }
        nextToken
      }
    }
  }
`;
