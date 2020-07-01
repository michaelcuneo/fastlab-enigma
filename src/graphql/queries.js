/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRole = /* GraphQL */ `
  query GetRole($id: ID!) {
    getRole(id: $id) {
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
export const listRoles = /* GraphQL */ `
  query ListRoles(
    $filter: ModelRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStaffRoles = /* GraphQL */ `
  query GetStaffRoles($id: ID!) {
    getStaffRoles(id: $id) {
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
export const listStaffRoless = /* GraphQL */ `
  query ListStaffRoless(
    $filter: ModelStaffRolesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaffRoless(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        roleId
        role {
          id
          label
          value
          description
          staff {
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
      nextToken
    }
  }
`;
export const getProjectStaff = /* GraphQL */ `
  query GetProjectStaff($id: ID!) {
    getProjectStaff(id: $id) {
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
export const listProjectStaffs = /* GraphQL */ `
  query ListProjectStaffs(
    $filter: ModelProjectStaffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectStaffs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getStaff = /* GraphQL */ `
  query GetStaff($id: ID!) {
    getStaff(id: $id) {
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
export const listStaffs = /* GraphQL */ `
  query ListStaffs(
    $filter: ModelStaffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaffs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
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
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getGallery = /* GraphQL */ `
  query GetGallery($id: ID!) {
    getGallery(id: $id) {
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
export const listGallerys = /* GraphQL */ `
  query ListGallerys(
    $filter: ModelGalleryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGallerys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
